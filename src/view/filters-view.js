import AbstractView from '../framework/view/abstract-view.js';

function createFiltersTemplate(currentFilter) {

  return `
  <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${currentFilter === 'everything' ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" ${currentFilter === 'future' ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present" ${currentFilter === 'present' ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-present">Present</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" ${currentFilter === 'past' ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
}


export default class FiltersView extends AbstractView{
  #currentFilter = null;
  #filterChangeHandler = null;

  constructor({currentFilter, filterChangeHandler}) {
    super();
    this.#currentFilter = currentFilter;
    this.#filterChangeHandler = filterChangeHandler;

    this.element.addEventListener('change', this.#filterChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#currentFilter);
  }

}