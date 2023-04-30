import {BsSearch} from 'react-icons/bs'
import './index.css'

let keyValue

const FiltersGroup = props => {
  const {
    titleSearches,
    categoryOptions,
    ratingsList,
    changeSearchInputs,
    changeCategoryOptions,
    changeRatings,
    activeCategoryOptionIds,
    activeRatingIds,
    onClickClearFilter,
  } = props

  const onEnterSearchInput = event => {
    keyValue = event.key
  }

  const onChangeSearchInput = event => {
    if (keyValue === 'Enter') {
      changeSearchInputs(event.target.value)
    }
  }

  const onClickCategory = categoryId => {
    changeCategoryOptions(categoryId)
  }

  const onClickRating = ratingId => {
    changeRatings(ratingId)
  }

  const onClickFilters = () => {
    onClickClearFilter()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          className="input"
          value={titleSearches}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>

      <h1 className="category-heading">Category</h1>
      <ul className="category-container">
        {categoryOptions.map(eachCategory => (
          <li
            key={eachCategory.categoryId}
            className="category"
            onClick={onClickCategory(eachCategory.categoryId)}
          >
            <button
              className={
                activeCategoryOptionIds === eachCategory.categoryId
                  ? 'active-category category-button'
                  : 'category-button'
              }
              type="button"
            >
              {eachCategory.name}
            </button>
          </li>
        ))}
      </ul>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-container1">
        {ratingsList.map(eachRating => (
          <li
            key={eachRating.ratingId}
            className="rating-item1"
            onClick={onClickRating(eachRating.ratingId)}
          >
            <img
              className="rating-img1"
              alt="rating"
              src={eachRating.imageUrl}
            />
            <p
              className={
                activeRatingIds === eachRating.ratingId
                  ? 'up-text active-category'
                  : 'up-text'
              }
            >
              & up
            </p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClickFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
