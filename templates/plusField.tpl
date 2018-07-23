{{if ~isPhotoType}}
<div class="px-2 pb-3 col-sm-6 col-sm-6 col-md-3 ">
    {{/if}}
    {^{on 'click' ~field.add ~type #parent.parent.parent.parent.getIndex() ~fieldNum}}
        <button data-link="class{:~isPhotoType ? 'addFieldBtn btn rich-radio': 'addFieldBtn btn'}">
            +
        </button>
    {{/on}}
    {{if ~isPhotoType}}
</div>
{{/if}}