class FilterVideosPost {
  constructor() {
    this.filters = [...document.querySelectorAll('.filter-videos-post-new__filter')]
    this.videoWrapper = document.querySelector('.filter-videos-post-new__video-wrapper')
    this.filterWrapper = document.querySelector('.filter-videos-post-new__filter-wrapper')
    this.searchForm = document.querySelector('.filter-videos-post-new__search-form')
    this.searchInput = document.querySelector('.filter-videos-post-new__search-input')
    this.paginationList = document.querySelector('.filter-videos-post-new__pagination-list')

    this.loadInitialVideoPosts()
    this.listenFilters()
    this.listenSearchForm()
  }

  async loadInitialVideoPosts() {
    const activeFilter = document.querySelector('.filter-videos-post-new__filter.active')
    const termId = activeFilter.dataset.termid
    await this.getFilteredPosts(termId)
  }

  handleYoutubeVideos() {
    this.videoIframe = [...document.querySelectorAll('.filter-videos-post-new__video-iframe')]

    this.videoIframe.map((video) => {
      const iframe = video.querySelector('iframe')

      video.addEventListener('click', () => {
        video.classList.add('active')
        iframe.src = `${iframe.src}?autoplay=1`
      })
    })
  }

  listenFilters() {
    this.filters.map((filter) => {
      filter.addEventListener('click', () => {
        if (this.paginationList.classList.contains('search-hide'))
          this.paginationList.classList.remove('search-hide')

        this.searchInput.value = ''
        this.handleFilterClass()
        this.getFilteredPosts(filter.dataset.termid)

        filter.classList.add('active')
      })
    })
  }

  listenSearchForm() {
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault()

      this.handlePostSearch()
    })
  }

  async getFilteredPosts(termId, page = 1) {
    try {
      const response = await fetch(
        `${origin}/wp-json/videospost/v1/filterbyterm/${termId}?page_id=${this.filterWrapper.dataset.pageid}&paged=${page}`,
      )
      const data = await response.json()

      this.paginationList.innerHTML = ''
      if (data.pagination) {
        data.pagination.map((item) => {
          const listItem = document.createElement('li')
          listItem.classList.add('filter-videos-post-new__pagination-list-item', 'pagination-api')
          listItem.innerHTML = item
          this.paginationList.appendChild(listItem)
        })
      }

      this.videoWrapper.innerHTML = ''
      this.videoWrapper.innerHTML = data.posts

      this.handleApiPagination()
      this.handleYoutubeVideos()
    } catch (error) {
      console.error(error)
    }
  }

  async handlePostSearch() {
    const search_term = this.searchInput.value
    try {
      const response = await fetch(
        `${origin}/wp-json/videospost/v1/search/?search_term=${search_term}&page_id=${this.filterWrapper.dataset.pageid}`,
      )
      const data = await response.json()

      this.handleSearchEvent()
      this.videoWrapper.innerHTML = ''
      this.videoWrapper.innerHTML = data

      this.handleYoutubeVideos()
    } catch (error) {
      console.error(error)
    }
  }

  handleFilterClass() {
    this.filters.forEach((filter) => {
      filter.classList.remove('active')
    })
  }

  handleApiPagination() {
    const apiPaginationLinks = [...this.paginationList.querySelectorAll('.pagination-api')]

    apiPaginationLinks.map((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()

        const linkHref = link.querySelector('a').getAttribute('href')
        const queryString = linkHref.substring(linkHref.indexOf('?') + 1)
        const page = new URLSearchParams(queryString).get('paged')

        this.getFilteredPosts(
          document.querySelector('.filter-videos-post-new__filter.active').dataset.termid,
          page ? page : '1',
        )
      })
    })
  }

  handleSearchEvent() {
    this.paginationList.classList.add('search-hide')

    this.filters.map((filter) => {
      filter.classList.remove('active')
    })
  }
}

new FilterVideosPost()
