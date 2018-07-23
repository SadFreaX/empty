<div data-link="class{:~isPhotoType ? 'col-sm-6 col-sm-6 col-md-3 px-2 mb-3' : 'col-sm-12 px-2 pb-3' }">
    <label data-link="class{:~isPhotoType ? 'rich-radio' : '' }"{{if ~isPhotoType}} style="background-image: url('{{:image}}')" {{/if}} >
        <div class="radio-label-inside">
            <input type='{{:~type}}' class="{{:~type}}" value="{{:value}}" data-link="">

            <span  class="{{:~type}}-label" data-link="visible{:!~editMode} text{:name}"></span>

            <input type="text" class="" data-link="
            {:label:}
            visible{:~editMode}
            visible{:!~isPhotoType}
            "/>

            <textarea type="text" class="" data-link="
            {:label:}
            visible{:~editMode}
            visible{:~isPhotoType}
            class{merge:~type toggle=~type}
            "></textarea>

            <button class="addPhoto-btn btn" data-link="{on 'click' ~photo.showPicker ~stepNum ~fieldNum #getIndex()}} visible{:~isPhotoType}">
                Фото
            </button>

        </div>
    </label>
</div>