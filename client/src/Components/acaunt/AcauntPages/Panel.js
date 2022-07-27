const Panel = () => {



    return(
        <div>
           <button class="uk-button uk-button-primary" uk-toggle="target: #my-id">Добавити товар</button>


           <div id="my-id" uk-modal={toString()}>
                <div class="uk-modal-dialog uk-modal-body">
                        <h2 class="uk-modal-title">Добавити товар</h2>
                            <form>
                                <div class="uk-margin">
                                    <input class="uk-input uk-form-width-medium" type="text" placeholder="Ім'я товару" />
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-form-width-medium" type="text" placeholder="Ціна" />
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-form-width-medium" type="text" placeholder="Опис" />
                                </div>
                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-select">Тип товару</label>
                                    <div class="uk-form-controls select">
                                        <select class="uk-select" id="form-stacked-select">
                                            <option>Не вибрано</option>
                                            <option>Линдінг</option>
                                            <option>Інтернет магазин</option>
                                            <option>Веб додаток</option>
                                            <option>Мібільний Додаток</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-form-width-medium" type="text" placeholder="Url на фото промо фото товару" />
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-form-width-medium" type="text" placeholder="Url на головне фото товару" />
                                </div>
                            </form>


                        <p class="uk-text-right">
                            <button class="uk-button uk-button-default uk-modal-close" type="button">Закрити</button>
                            <button class="uk-button uk-button-primary" type="button">Добавити</button>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Panel