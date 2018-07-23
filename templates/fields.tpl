{^{for fields }}


    <!------------------------- checkbox ----------------------->
    {^{if type == "checkbox" ~fieldNum=#index ~isPhotoType=isPhotoType}}
        <div class="row no-gutters">
            {^{for options  ~type=type}}
                {^{include tmpl="multiple" /}}
                {{/for}}
            {^{include tmpl="plusField" ~type=type/}}
        </div>
        {{/if}}

    <!------------------------- radio ----------------------->
    {^{if type == "radio" ~fieldNum=#index ~isPhotoType=isPhotoType}}
        <div class="row no-gutters">
            {^{radiogroup selectedCar}}
            {^{for options  ~type=type}}
                {^{include tmpl="multiple"/}}
                {{/for}}
            {{/radiogroup}}
            {^{include tmpl="plusField"  ~type=type/}}
        </div>
        {{/if}}

    <!------------------------- RICH ----------------------->
    {^{if type == "radio-rich" }}
        <div class="row no-gutters">
            {^{radiogroup selectedCar ~type=type}}
            {^{for options }}
                <div class="px-2 mb-3 col-sm-6 col-sm-6 col-md-3 ">
                    <label class="rich-radio" style="background-image: url('{{:image}}')">
                        <div>
                            <input type='radio' class="radio" value="{{:value}}"
                                   data-link="{on 'click' ~rich.show value ~stepNum }">
                            {{:label}}
                        </div>
                    </label>
                </div>
                {{/for}}
            {{/radiogroup}}
        </div>
        {{/if}}

    <!------------------------- text ----------------------->
    {^{if type == "inputtext" }}
        <div class="col-sm-3">{^{include tmpl="group_text" /}}</div>
        {{/if}}

    <!------------------------- textarea ----------------------->
    {^{if type == "textarea" }}
        <div class="col-sm-3">{^{include tmpl="group_textarea" /}}</div>
        {{/if}}

    {{/for}}

{{if type != 'total'}}
    <button class="addFieldBtn btn " data-link="{on 'click' ~field.add 'textarea' ~stepNum }">+ Поле</button>
    <button class="addFieldBtn btn " data-link="{on 'click' ~field.add 'checkbox' ~stepNum }">+ Галочка</button>
    <br>
    {{if canskip}}
    <label>
        <input type="checkbox" data-link="canskip">
        этот шаг можно пропускать
    </label>
    {{/if}}
{{/if}}