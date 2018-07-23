<div class="row">
    <div class="col-sm-12">
        <form action="" id="search-form">
            <input type="text" class="form-control mb-2" id="search" value="{{:searchTerm}}">
                    <input type="submit" class="btn" value="Искать">

                    <input type="reset" class="switchFromPhotoStep-btn btn" value="Отмена" data-link="
                    {on 'click' ~photo.hidePicker ~stepNum }
                    ">

        </form>
    </div>
</div>





<div id="photo-ajax-container" class="mt-3"></div>


<input type="button" class=" btn" value="Еще" data-link="
{on 'click' ~photo.loadMoreHandler }
">
