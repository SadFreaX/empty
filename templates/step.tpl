{^{for steps ~stepNum=#getIndex() ~editMode=editMode}}
<div class="step-wrap container-fluid ">
    <div class="step-num">

        <h1>{{:#index+1}}</h1>
        <span class="step-order">
        {{if #getIndex()>0}}
            Показывается после {{:#getIndex()}} шага
            {{else }}
            Первый шаг
            {{/if}}
        </span>
    </div>Вариант 2
    <div class="step" data-link="class{merge:disabled toggle='disabled'}">
        <h1 class="step-title  pl-3 "    data-link="text{:title} visible{:!~editMode}" >{^{:title}}</h1>
        <input class="step-title  pl-3 " data-link="{:title:} visible{:~editMode}" value="{{:title}}" />

        {{if type == "photo"}}
            {^{include tmpl="photo" ~stepNum=#getIndex()/}}
        {{else type == "total"}}
                {^{include tmpl="total"  ~stepNum=#getIndex()/}}
        {{else}}
                {^{include tmpl="fields" ~stepNum=#getIndex()/}}
        {{/if}}

        {{if hint }}
        <h6>{^{:hint}}</h6>
        {{/if}}
    </div>
</div>
{{/for }}


    <div class="row " style="float: left;">
    <div class="col-sm-12 text-center">
        <button class="btn"  data-link="{on 'click' ~step.add }">Новый шаг</button>
    </div>
    </div>
