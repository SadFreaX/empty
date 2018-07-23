"use strict";
/********************************* Field *********************************/

var fieldHandlers = {
  add: function(type, stepNum, fieldNum) {
    var THIS = this;
    switch (type) {
      case "textinput":
        DataManager.insertField(stepNum, new InitValues.field.text());
        handlers.field.insert();
        break;
      case "checkbox":
        DataManager.insertOption(
          stepNum,
          fieldNum,
          new InitValues.field.checkbox().options[0]
        );
        $("textarea.checkbox-label:last")
          .focus(handlers.field.textAreaFocusCallback)
          .focus();
        break;
      case "textarea":
        DataManager.insertField(stepNum, new InitValues.field.textArea());
        break;
      case "radio":
        DataManager.insertOption(
          stepNum,
          fieldNum,
          new InitValues.field.radio().options[0]
        );
        $("textarea.radio-label:last")
          .focus(handlers.field.textAreaFocusCallback)
          .focus();
        break;
    }
  },
  textAreaFocusCallback: function() {
    var $this = $(this);
    $this.select();
    window.setTimeout(function() {
      $this.select();
    }, 1);
    // Work around WebKit's little problem
    function mouseUpHandler() {
      // Prevent further mouseup intervention
      $this.off("mouseup", mouseUpHandler);
      return false;
    }
    $this.mouseup(mouseUpHandler);
  }
};

/********************************* Step *********************************/

var stepHandlers = {
  add: function() {
    DataManager.insertStepLast(new InitValues.Step());
  }
};

/********************************* Rich *********************************/

var richHandlers = {
  show: function(type, stepNum) {
    DataManager.removeField(stepNum);
    if ("radios" === type) {
      DataManager.insertFieldFirst(stepNum, [new InitValues.field.radio(type)]);
    }
    if ("photo-radios" === type) {
      DataManager.insertFieldFirst(stepNum, [new InitValues.field.radio(type)]);
    }
    if ("checkboxes" === type) {
      DataManager.insertFieldFirst(stepNum, [
        new InitValues.field.checkbox(type)
      ]);
    }
    if ("photo-checkboxes" === type) {
      DataManager.insertFieldFirst(stepNum, [
        new InitValues.field.checkbox(type)
      ]);
    }
    if ("total" === type) {
      DataManager.removeStep(stepNum);
      DataManager.insertStep(stepNum, new InitValues.TotalStep());
    }
  }
};

/********************************* PHOTO *********************************/

var photoHandlers = {
  perPage: 12,
  pageNum: 1,
  API_KEY: "9543299-1a76fc678fee63f5c023ba186",
  URL: "",
  search_terms: "",
  showPicker: function(stepNum, fieldNum, optionNum) {
    // todo disable other steps because we have only one bufferStep
    DataManager.setBuffer("step", data.steps[stepNum]);
    var currentFieldOption =
      data.steps[stepNum].fields[fieldNum].options[optionNum];
    var photoStep = new InitValues.PhotoPicker(currentFieldOption.label);

    DataManager.setBuffer("option", currentFieldOption);
    DataManager.removeStep(stepNum);
    DataManager.insertStep(stepNum, photoStep);

    $("#search-form")
      .submit(handlers.photo.searchFormCallback)
      .submit();
    $("#search")
      .focus(handlers.field.textAreaFocusCallback)
      .focus();
  },
  hidePicker: function(stepNum) {
    DataManager.removeStep(stepNum);
    var backupedStep = DataManager.getBuffer("step");
    DataManager.insertStep(stepNum, backupedStep);
    DataManager.clearBuffer("step");
  },
  formatURL: function() {
    handlers.photo.URL =
      "https://pixabay.com/api/?key=" +
      handlers.photo.API_KEY +
      "&q=" +
      handlers.photo.search_terms +
      "&per_page=" +
      handlers.photo.perPage +
      "&page=" +
      handlers.photo.pageNum +
      "&image_type=photo";
  },
  set_search_terms: function(searchFieldValue) {
    handlers.photo.search_terms = searchFieldValue.replace(/\s/g, "+");
  },
  query: function() {
    return $.ajax({
      dataType: "json",
      url: handlers.photo.URL
    }); // Return the $.ajax promise
  },
  render: function(jsonData) {
    var container = $("<div />");
    var image;
    if (jsonData.length < 1 || jsonData.totalHits == 0) return null;
    for (var i = 0; i <= handlers.photo.perPage - 1; i++) {
      image = $("<img />")
        .attr("src", jsonData.hits[i].previewURL)
        .attr("data-full", jsonData.hits[i].webformatURL);
      container.append(image);
    }
    return container.find("img");
  },
  imgClickCallback: function() {
    var bufferedOption = DataManager.getBuffer("option");
    bufferedOption.image = $(this).data("full");
    $(".switchFromPhotoStep-btn").click();
  },
  searchFormCallback: function(e) {
    handlers.photo.set_search_terms(
      $(this)
        .find("#search")
        .val()
    );
    handlers.photo.formatURL();
    var ajaxQuery = handlers.photo.query();
    $.when(ajaxQuery).then(handlers.photo.responseHandler);
    e.preventDefault();
    return false;
  },
  responseHandler: function(response) {
    var imageCollection;
    imageCollection = handlers.photo.render(response);
    if (imageCollection === null) return false;
    imageCollection
      .addClass("pb-1 col-sm-6 col-md-2")
      .click(handlers.photo.imgClickCallback);
    $("#photo-ajax-container").append(imageCollection);
    handlers.photo.pageNum++;
  },
  loadMoreHandler: function() {
    $("#search-form").submit();
    handlers.photo.pageNum++;
  }
};

var totalHandlers = {
  add: function(stepNum) {
    var totalStep = new InitValues.TotalStep();

    DataManager.removeStep(stepNum);
    DataManager.insertStep(stepNum, totalStep);
  }
};

var handlers = {
  field: fieldHandlers,
  step: stepHandlers,
  rich: richHandlers,
  photo: photoHandlers,
  total: totalHandlers
};
