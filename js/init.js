"use strict";
var InitValues = {
  field: {
    text: function() {
      this.type = "inputtext";
      this.label = "Пункт вопроса";
      this.value = "";

      this.placeholder = "Пусто";
    },
    textArea: function() {
      this.type = "textarea";
      this.label = "Вариант ответа";
      this.placeholder = "Текст по умолчанию";
      this.value = "Текст по умолчанию ";
    },
    checkbox: function(subtype) {
      this.type = "checkbox";
      this.label = "Вариант " + parseInt(data.counters.chechbox);
      this.value = false;
      this.options = [
        {
          value: "placeholder_" + parseInt(data.counters.chechbox++),
          label: "Вариант " + parseInt(data.counters.chechbox)
        }
      ];
      if (subtype === "photo-checkboxes") {
        this.isPhotoType = true;
        this.options[0].image = "notsetyet";
      }
    },
    radio: function(subtype) {
      this.type = "radio";

      this.options = [
        {
          value: "placeholder_" + parseInt(data.counters.radio++),
          label: "Вариант " + parseInt(data.counters.radio)
        }
      ];
      if (subtype === "photo-radios") {
        this.isPhotoType = true;
        this.options[0].image = "notsetyet";
      }
    }
  },

  Step: function() {
    this.title = "Выберите тип вопроса";
    this.image = "https://path.to.jpeg";
    this.canskip = true;
    this.hint = "подсказка";
    this.fields = [new InitValues.RichField()];
  },

  TotalStep: function() {
    this.type = "total";
    this.title = "Остался всего один шаг!";
    this.image = "";
    this.hint = "подсказка";
    this.photoLegend = "текст внизу картинки";
    this.sidebar = {
      bonusImage:
        "https://avatars.mds.yandex.net/get-pdb/49816/56f1ec84-ed1e-4a3c-8fda-166c5f73f701/s800",
      bonusUrl: "https://yandex.ru",
      title: "Заголовок",
      subtitle: "sub Title text"
    };
    this.form = {
      submitText: "Послать",
      email: "Ваш Email",
      phone: "Ваш телефон",
      name: "Ваше имя",
      policyLink: "https://ya.ru/"
    };
  },

  RichField: function(name) {
    this.type = "radio-rich";
    this.options = [
      {
        value: "radios",
        label: "Radio",
        image:
          "https://pixabay.com/get/ea30b20f2af7043ed1584d05fb1d4f93e774e0dc10ac104496f1c47ea2eeb4ba_640.jpg"
      },
      {
        value: "checkboxes",
        label: "Галочки",
        image:
          "https://pixabay.com/get/ea30b30c21fd033ed1584d05fb1d4f93e774e0dc10ac104496f1c47ea2eeb4ba_640.jpg"
      },
      {
        value: "photo-radios",
        label: "photo Radio",
        image:
          "https://pixabay.com/get/ea30b3062ef1023ed1584d05fb1d4f93e774e0dc10ac104496f1c47ea2eeb4ba_640.jpg"
      },
      {
        value: "photo-checkboxes",
        label: "photo Галочки",
        image:
          "https://pixabay.com/get/ea30b3062ef6093ed1584d05fb1d4f93e774e0dc10ac104496f1c47ea2eeb4ba_640.jpg"
      },
      {
        value: "total",
        label: "Итог",
        image:
          "https://pixabay.com/get/ea30b20e20f1073ed1584d05fb1d4f93e774e0dc10ac104496f1c47ea2eeb4ba_640.jpg"
      }
    ];
  },
  PhotoPicker: function(label) {
    this.type = "photo";
    this.title = "Поиск фотографии";
    this.searchTerm = label;
    this.image = "";
    this.hint = "подсказка";
  }
};

/**
 *
 * **********  Load templates  *************
 *
 *
 */

var loadTpl = {
  path: "http://46.36.219.232:7777/1.com/quizzer/templates/",
  registerTemplate: function(name, view) {
    var deferred = $.Deferred();
    var subfolder = "";
    if (name.split("_")[0] === "group") subfolder = "group/";
    if (name.split("_")[0] === "field") subfolder = "field/";

    if ($.templates[name]) {
      return deferred.resolve().promise();
    }
    $.get(loadTpl.path + subfolder + name + ".tpl", function(value) {
      $.templates(name, value);
      deferred.resolve();
    });
    return deferred.promise();
  }
};

loadTpl.path = "http://localhost:63342/quizzer/templates/";
$.when(
  loadTpl.registerTemplate("step"),
  loadTpl.registerTemplate("fields"),
  loadTpl.registerTemplate("photo"),
  loadTpl.registerTemplate("multiple"),
  loadTpl.registerTemplate("plusField"),
  loadTpl.registerTemplate("total")

  // loadTpl.registerTemplate('group_checkbox'),
  // loadTpl.registerTemplate('group_text'),
  // loadTpl.registerTemplate('group_textarea'),
  //
  // loadTpl.registerTemplate('field_inputtext'),
  // loadTpl.registerTemplate('field_checkbox'),
  // loadTpl.registerTemplate('field_textarea'),
).done(function() {
  DataManager.load("data");
});
