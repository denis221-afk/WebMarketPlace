import './item.scss';
const CardItem = () => {
    return(
    <div className="catalog">
        <div className="container">
            <div className="catalog-card">
                <img className="catalog-card__img" src="https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png" alt="Landing Page"></img>
                <div className="catalog-card__subtitle">Tier</div>
                <div className="catalog-card__descr">Маленький лаконічний
                сайт, зроблений у мінімалістичному стилі, для вашого продукту, або послуги.</div>
                <hr className="catalog-card__line"></hr>
                <div className="catalog-card__footer">
                    <div className="catalog-card__price">99$</div>
                    <button>Купити</button>
                </div>
                <div className="creator">
                    <img className="creator__avatar" src="https://i.pinimg.com/originals/6f/aa/0e/6faa0e4f46425b297b4f2603a19fdbc3.jpg" alt="Avatar"></img>
                    <div className="creator__name">Ivanov Ivanko</div>
                </div>
            </div>
        </div>
    </div>
    )
} 

export default CardItem;