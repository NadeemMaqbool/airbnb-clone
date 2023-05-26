import "./Place.css";

const Place = () => {
  return (
    <div className="places-list">
      <div className="places-list__item">
        <div className="places-list__item__image">
          <img src="https://via.placeholder.com/150" alt="place" />
        </div>
        <div className="places-list__item__info">
          <div>
            <div className="places-list__item__info__title">
              Radisson Blu Hotel Olumpia Tallinn
            </div>
            <div className="places-list__item__info__detail">
              A perk like food and drink extras, free breakfast, or parking
              credits
            </div>
            <div className="places-list__item__info__perks">
              Breakfast, Parking, Food & Drink
            </div>
          </div>

          <div className="places-list__item__subinfo">
            <div className="place-list__item__subinfo__rating">
              8.6/10 Excellent 200 reviews
            </div>
            <div className="place-list__item__subinfo__price">
              <div className="place-list__item__subinfo__price__value">
                $ 230
                <span className="place-list__item__subinfo__price__detail">
                  / night
                </span>
              </div>
              <div className="place-list__item__subinfo__price__label">
                includes taxes and charges
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
