<div class="row no-gutters">
    {^{radiogroup selectedCar}}
    {^{for options}}
        <div data-link="class{:~isPhotoType ? 'col-sm-6 col-sm-6 col-md-3 px-2 pb-3' : 'col-sm-12 px-2 pb-3' }">
            <label data-link="class{:~isPhotoType ? 'rich-radio' : '' }"{{if ~isPhotoType}}style="background-image: url('{{:image}}')" {{/if}} >
                <div class="radio-label-inside">
                    <input type='radio' class="radio" value="{{:value}}" data-link="{on 'click' ~rich.show value ~stepNum }">

                    <span  class="radio-label" data-link="visible{:!~editMode} text{:name}"></span>
                    <textarea class="radio-label" type="text" data-link="visible{:~editMode} {:label:}"></textarea>
                    <button class=" addPhoto-btn btn" data-link="{on 'click' ~photo.showPicker ~stepNum image }} visible{:~isPhotoType}">
                        Фото
                    </button>
                </div>
            </label>
        </div>
        {{/for}}
    {{/radiogroup}}

    {{if ~isPhotoType}}<div class="px-2 pb-3 col-sm-6 col-sm-6 col-md-3 ">{{/if}}
        <button data-link="
                     {on 'click' ~field.add  'radio' #parent.parent.parent.parent.getIndex() ~fieldNum}
                     class{:~isPhotoType ? 'addFieldBtn btn rich-radio': 'addFieldBtn btn' }">
            +
        </button>
    {{if ~isPhotoType}}</div>{{/if}}
</div>