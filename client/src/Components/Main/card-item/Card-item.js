import './item.scss';
const CardItem = () => {
    return(
    <div className="catalog">
        <div className="container">
            <div className="catalog-card">
                <img src="https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png" alt="Landing Page" className="catalog-card__img"></img>
                <div className="catalog-card__subtitle">Tier</div>
                <div className="catalog-card__descr">Маленький лаконічний
                сайт, зроблений у мінімалістичному стилі, для вашого продукту, або послуги.</div>
                <div className="line"></div>
                <div className="catalog-card__price">99$</div>
                <button>Купити</button>
            </div>
        </div>
    </div>
    )
} 

export default CardItem;