<div class="row">
    <div class="col-sm-8">
        1.выбор фото из галереи <br>
          {{:photoLegend}}<br>
    </div>
    <div class="col-sm-4">


        <img class="img-thumbnail" width='50%'src="{{:sidebar.bonusImage}}"> <br>
        <a href="{{:sidebar.bonusUrl}} ">Получить бонус</a><br>

        <h3 class="step-title" data-link="text{:sidebar.title} visible{:!~editMode}" >{^{:sidebar.title}}</h3>
        <input class="step-title" data-link="{:sidebar.title:} visible{:~editMode}" value="{{:title}}" />

        <textarea  class="form-control mb-3" data-link="sidebar.subtitle" cols="30" rows="3"></textarea>


        <input class="form-control" type="email" data-link="form.email" /><br>
        <input class="form-control" type="phone" data-link="form.phone" /><br>
        <input class="form-control" type="text" data-link="form.name" /><br>

        <input class="form-control" data-link="value{:form.submitText}"> <br>
        <br>
        ссылка на условия обрабоки данных:
        <input class="form-control" type="text" data-link="form.policyLink" /><br>



    </div>
</div>

