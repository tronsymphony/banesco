<section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <div class="cards" style="
      --paddings-top: <?php ($attributes['paddings']['desktop']['top']) ? $attributes['paddings']['desktop']['top'] : '0px' ?>;
      --paddings-top--mobile: <?php ($attributes['paddings']['mobile']['top']) ? $attributes['paddings']['mobile']['top'] : '0px' ?>;
      --paddings-bottom: <?php ($attributes['paddings']['desktop']['bottom']) ? $attributes['paddings']['desktop']['bottom'] : '0px' ?>;
      --paddings-bottom--mobile: <?php ($attributes['paddings']['mobile']['bottom']) ? $attributes['paddings']['mobile']['bottom'] : '0px' ?>;
      --margins-top: <?php ($attributes['margins']['desktop']['top']) ? $attributes['margins']['desktop']['top'] : '0px' ?>;
      --margins-top--mobile: <?php ($attributes['margins']['mobile']['top']) ? $attributes['margins']['mobile']['top'] : '0px' ?>;
      --margins-bottom: <?php ($attributes['margins']['desktop']['bottom']) ? $attributes['margins']['desktop']['bottom'] : '0px' ?>;
      --margins-bottom--mobile: <?php ($attributes['margins']['mobile']['bottom']) ? $attributes['margins']['mobile']['bottom'] : '0px' ?>;
      --gradient: <?php ($attributes['gradient']) ? $attributes['gradient'] : '#fff' ?>;
    ">
        <div class="cards__hero">
            <div class="container">
                <div class="cards__hero-inner">
                    <div class="cards__hero-text">Conoce todas nuestras tarjetas</div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="cards__content">
                <div class="cards__filters">
                    <div class="cards__filters-title">Me gustaría:</div>
                    
                    <div class="cards__filters-content">
                        <div class="cards__filter cards__filter--checkboxes" tabindex="-1">
                            <div class="cards__filter-header">
                                <span><?php echo $attributes[ "filter1" ]; ?></span>
                            </div>
                            
                            <div class="cards__filter-dropdown" data-filter="c">
                                <?php
                                    $checkboxes = [
                                        "MasterCard",
                                        "Visa",
                                    ];
                                    
                                    foreach ( $checkboxes as $checkbox ) {
                                        echo <<<CODE
                                            <label class="cards__filter-dropdown-line checkbox {$active}">
                                                {$checkbox}
                                            </label>
                                        CODE;
                                    }
                                ?>
                            </div>
                        </div>
                        
                        <div class="cards__filter cards__filter--checkboxes" tabindex="-1">
                            <div class="cards__filter-header">
                                <span><?php echo $attributes[ "filter2" ]; ?></span>
                            </div>
                            <div class="cards__filter-dropdown" data-filter="n">
                                <?php
                                    $checkboxes = [
                                        "Crédito",
                                        "Débito",
                                    ];
                                    
                                    foreach ( $checkboxes as $checkbox ) {
                                        echo <<<CODE
                                            <label class="cards__filter-dropdown-line checkbox {$active}">
                                                {$checkbox}
                                            </label>
                                        CODE;
                                    }
                                ?>
                            </div>
                        </div>
                        
                        <div class="cards__filter cards__filter--slider" tabindex="-1">
                            <div class="cards__filter-header">
                                <span><?php echo $attributes[ "filter3" ]; ?></span>
                            </div>
                            
                            <div class="cards__filter-dropdown" data-filter="b">
                                <?php
                                    $checkboxes = [
                                        "Internacional",
                                        "Acceso a salas VIP en aeropuertos",
                                        "Servicio 24/7",
                                        "Cashback",
                                        "Puntos",
                                        "Programa de Protección contra Fraudes",
                                        "Seguro de Vida"
                                    ];
                                    
                                    foreach ( $checkboxes as $checkbox ) {
                                        echo <<<CODE
                                            <label class="cards__filter-dropdown-line checkbox {$active}">
                                                {$checkbox}
                                            </label>
                                        CODE;
                                    }
                                ?>
                            </div>
                            
                            <!-- Disabled: <div class="cards__filter-dropdown">
                                <div class="slider">
                                    <div class="slider__dragline" id="slider"></div>
                                    <div class="slider__min">0</div>
                                    <div class="slider__max">max</div>
                                </div>
                            </div> -->
                        </div>
                        
                        <button class="cards__filters-content-button primary-button">Recomiéndame</button>
                    </div>
                    
                    <button class="cards__filters-cancel">Borrar filtros</button>
                </div>
                
                <div class="cards__posts-recommended">
                    <!-- Dynamically loaded -->
                </div>
                
                <div class="cards__posts">
                    <!-- Dynamically loaded -->
                </div>
                
                <nav class="pagination">
                    <a href="#" class="previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="-4.5 0 20 20">
                            <path fill="#000" fill-rule="evenodd" d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"/>
                        </svg>
                    </a>
                    
                    <div class="pages">
                        <!-- Dynamically loaded -->
                        Loading...
                    </div>
                    
                    <a href="#" class="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="-4.5 0 20 20">
                            <path fill="#000" fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"/>
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
        
        <div class="cards__popup">
            <div class="container">
                <div class="cards__popup-inner-close"></div>
                <div class="cards__popup-inner">
                    <div class="cards__popup-item">
                        <div class="cards__popup-item-close">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/close.svg" />
                        </div>
                        <div class="cards__popup-item-image">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/none.png" alt="">
                        </div>
                    </div>
                    <div class="cards__popup-item">
                        <div class="cards__popup-item-close">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/close.svg" />
                        </div>
                        <div class="cards__popup-item-image">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/none.png" alt="">
                        </div>
                    </div>
                    <div class="cards__popup-item">
                        <div class="cards__popup-item-close">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/close.svg" />
                        </div>
                        <div class="cards__popup-item-image">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/none.png" alt="">
                        </div>
                    </div>
                    <div class="cards__popup-button">
                        <button class="cards__popup-btn primary-button">Comparar Tarjetas</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script type='text/javascript'>
    var javascript_array = [
        <?php
        $query = new WP_Query(array(
            'post_type'   => 'cards',
            'post_status' => 'publish',
            'posts_per_page' => 1000,
        )); ?>
        <?php if ($query->have_posts()) : ?>
            <?php while ($query->have_posts()) : $query->the_post();
                global $post; ?> {
                    id: '<?php echo $post->post_name ?>',
                    image: '<?php echo get_the_post_thumbnail_url() ?>'
                },
            <?php endwhile; ?>
        <?php endif;
        wp_reset_postdata(); ?>
    ];
</script>

<script>
    function setCardTemplate( card ) {
        let selected_cards = localStorage.getItem( "cards" ) ? JSON.parse( localStorage.getItem( "cards" ) ) : [],
            is_active = selected_cards.includes( card.slug );

        let permalink = "";

        if (card.pag_url) {
          permalink = card.pag_url;
        }
        
        return `<div class="cards__posts-item" data-slug="${card.slug}">
            <div class="cards__posts-item-top">
                <div class="cards__posts-item-image">
                    <img src="${card.thumbnail_url}" alt="${card.title}" />
                </div>
                <a href="${permalink}" title="${card.title}">
                  <h3 class="cards__posts-item-title">
                    ${card.title}
                  </h3>
                </a>
            </div>
            <div class="cards__posts-item-body">
                <div class="cards__posts-item-text">${card.excerpt}</div>
                <div class="cards__posts-item-label ${( is_active === true ) ? "active" : ""}">
                    <img src="<?php the_block_url( __DIR__ ); ?>/assets/vektor.svg" />
                    Comparar
                </div>
            </div>
        </div>`;
    }
    
    function setRecommendedCardTemplate( card ) {
        let selected_cards = localStorage.getItem( "cards" ) ? JSON.parse( localStorage.getItem( "cards" ) ) : [],
            is_active = selected_cards.length ? selected_cards.includes( card.slug ) : null;

        return `<div class="cards__top cards__posts-item" data-slug="${card.url}">
            <div class="cards__top-inner">
                <div class="cards__top-img cards__posts-item-image">
                    <img src="${card.thumbnail_url}" alt="${card.title}" />
                </div>
                <div class="cards__top-content">
                    <div class="cards__top-content-suptitle">Nuestra recomendación para ti</div>
                    <div class="cards__top-content-title">${card.title}</div>
                    <div class="cards__top-content-descr">${card.excerpt}</div>
                    <div class="cards__top-content-list">
                        <div class="cards__top-content-list-item">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="check" />
                            Tarjeta doble saldo
                        </div>
                        <div class="cards__top-content-list-item">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="check" />
                            Multicrédito Banesco
                        </div>
                        <div class="cards__top-content-list-item">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/check.svg" alt="check" />
                            Protección de compras
                        </div>
                    </div>
                    <div class="cards__top-content-bottom">
                        <button class="cards__top-content-label cards__posts-item-label ${( is_active === true ) ? "active" : ""}">
                            <img src="<?php the_block_url(__DIR__); ?>/assets/vektor.svg" />
                            Comparar
                        </button>
                        <a href="${card.url}" class="cards__top-content-button primary-button">
                            Me interesa
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    }
    
    function setRecommendedCard( card ) {
        let dom_recommend = `div.cards__posts-recommended`;
        
        jQuery( dom_recommend ).html(
            setRecommendedCardTemplate( card )
        );
    }
    
    function getCards() {
        let section = jQuery( "div.cards__posts" ),
            pagination = jQuery( "nav.pagination" ).find( "div.pages" );
        
        const set_cards = function( cards ) {
            section.html(
                ( function() {
                    let html = "";
                    jQuery( cards ).each( function() {
                        html += setCardTemplate( jQuery( this ).get( 0 ) );
                    });
                    
                    return html;
                })()
            );
        }
        
        const set_pagination = function( max_num_pages ) {
            let filters = getFilters();
            
            pagination.html(
                ( function() {
                    let html = "";
                    for ( let i = 1; i <= max_num_pages; i++ ) {
                        html += `<a href="#" class="${( ( filters[ "p" ] || 1 ) == i ) ? "is-selected" : ""}" data-filter="p">${i}</a>`;
                    }
                    
                    return html;
                })()
            );
        }

        jQuery.ajax({
            method: "POST",
            url: $globals.ajax_url,
            crossDomain: true,
            data: {
                "action": "get_cards",
                ...getFilters()
            },
            beforeSend: function() {
                section.addClass( "is-loading" );
            },
            success: function( result ) {
                if ( result.success === true ) {
                    set_cards( result.data.cards );
                    set_pagination( result.data.max_num_pages );
                    setFilters();
                    setRecommendedCard( result.data.cards[ Math.floor( Math.random() * result.data.cards.length ) ] );
                    setCardEvents();
                }
            },
            complete: function() {
                section.removeClass( "is-loading" );
            }
        });
    }
    
    function setFilters() {
        let selected_filters = getFilters(),
            filters = jQuery( "[data-filter]" );
        
        filters.each( function() {
            let filter = jQuery( this ),
                f = filter.attr( "data-filter" );
            
            filter.find( "label" ).each( function() {
                let label = jQuery( this );
                
                if ( typeof selected_filters[ f ] !== "undefined" && selected_filters[ f ].includes( label.text().trim() ) === true ) {
                    label.addClass( "active" );
                }
            });
        });
    }
    
    function setPagination() {
        let dom_pages = `[data-filter="p"]`;
        
        jQuery( document ).off( "click", dom_pages ).on( "click", dom_pages, function( e ) {
            e.preventDefault();
            
            let filters = getFilters();
            
            filters[ "p" ] = jQuery( this ).text().trim();
            localStorage.setItem( "filters", JSON.stringify( filters ) );
            getCards();
        });
    }
    
    function setPaginationArrows() {
        let dom_arrows = `nav.pagination a.previous, nav.pagination a.next`;
        
        jQuery( document ).off( "click", dom_arrows ).on( "click", dom_arrows, function( e ) {
            e.preventDefault();
            
            let current_page = jQuery( "nav.pagination div.pages a.is-selected" ),
                next_page = current_page.next(),
                previous_page = current_page.prev();
            
            if ( jQuery( this ).hasClass( "previous" ) === true ) {
                if ( previous_page.length > 0 ) {
                    previous_page.trigger( "click" );
                }
            }
            
            if ( jQuery( this ).hasClass( "next" ) === true ) {
                if ( next_page.length > 0 ) {
                    next_page.trigger( "click" );
                }
            }
        });
    }
    
    jQuery( document ).ready( function() {
        getCards();
        setPagination();
        setPaginationArrows();
        setRecommendedCardTrigger();
    });
    
    function setRecommendedCardTrigger() {
        let dom_recommend_card_trigger = `.cards__filters-content-button`;
        jQuery( document ).off( "click", dom_recommend_card_trigger ).on( "click", dom_recommend_card_trigger, function( e ) {
            e.preventDefault();
            
            let recommended_card = jQuery( "div.cards__posts-recommended" ).find( "div.cards__top" );
            recommended_card[ ( recommended_card.hasClass( "active" ) === false ) ? "addClass" : "removeClass" ]( "active" );
        });
    }
    
    function setCardEvents() {
        let dom_cards = "div.cards__posts-item .cards__posts-item-label",
            card_comparator = jQuery( ".cards__popup" );
        
        const get_cards = function() {
            return localStorage.getItem( "cards" ) ? JSON.parse( localStorage.getItem( "cards" ) ) : [];
        };
        
        jQuery( document ).off( "click", dom_cards ).on( "click", dom_cards, function( e ) {
            e.preventDefault();
            
            let selected_cards = get_cards(),
                item = jQuery( this ).closest( ".cards__posts-item" ),
                item_label = item.find( ".cards__posts-item-label" ),
                item_slug = item.attr( "data-slug" ),
                matched_cards = jQuery( `[data-slug="${item_slug}"]` );
            
            if ( selected_cards.length <= 3 ) {
                if ( selected_cards.includes( item_slug ) === false ) {
                    localStorage.setItem( "cards", JSON.stringify( [ ...selected_cards, item_slug ] ) );
                    matched_cards.addClass( "active" );
                    matched_cards.find( ".cards__posts-item-label" ).addClass( "active" );
                    
                    let render;
                    document.querySelectorAll('.cards__popup-inner .cards__popup-item').forEach((item2) => {
                        if (item2.querySelector('.cards__popup-item-image img').src.includes('none.png')) {
                            if (!render) {
                                render = item2
                            }
                        }
                    })
                    render.querySelector('.cards__popup-item-image img').src = document.querySelector(
                        '.cards__posts-item[data-slug=' + item_slug + '] .cards__posts-item-image img',
                    ).src
                    render.dataset.slug = item_slug
                    render.classList.add('active')
                }
                else {
                    localStorage.setItem( "cards", JSON.stringify( selected_cards.filter( ( find ) => find !== item_slug ) ) );
                    matched_cards.removeClass( "active" );
                    matched_cards.find( ".cards__posts-item-label" ).removeClass( "active" );
                    
                    document
                        .querySelectorAll('.cards__popup-inner .cards__popup-item[data-slug=' + item_slug + ']')
                        .forEach((item2) => {
                            item2.querySelector('.cards__popup-item-image img').src =
                                '<?php the_block_url(__DIR__); ?>/assets/none.png'
                            item2.classList.remove('active')
                            item2.dataset.slug = ''
                        })
                }
            }
            
            if ( get_cards().length === 0 ) {
                document.querySelector('.cards__popup').classList.remove('active')
                document.querySelector('.cards__popup').classList.remove('collapsed')
            }
            else {
                document.querySelector('.cards__popup').classList.add('active')
                document.querySelector('.cards__popup').classList.remove('collapsed')
            }
        });
    }
    
    /* function setCardEvents() {
        const set_card_events = function(e) {
            const cards = localStorage.getItem( "cards" ) ? JSON.parse( localStorage.getItem( "cards" ) ) : [];
            const item = e.target.closest( ".cards__posts-item" );
            
            console.log( cards, item )
            
            if (!cards.find((find) => find == item.dataset.slug)) {
                localStorage.setItem('cards', JSON.stringify([...cards, item.dataset.slug]))
                
                document.querySelector('.cards__popup').classList.add('active')
                document.querySelector('.cards__popup').classList.remove('collapsed')
                
                let render;
                document.querySelectorAll('.cards__popup-inner .cards__popup-item').forEach((item2) => {
                    if (item2.querySelector('.cards__popup-item-image img').src.includes('none.png')) {
                        if (!render) {
                            render = item2
                        }
                    }
                })
                render.querySelector('.cards__popup-item-image img').src = document.querySelector(
                    '.cards__posts-item[data-slug=' + item.dataset.slug + '] .cards__posts-item-image img',
                ).src
                render.dataset.slug = item.dataset.slug
                render.classList.add('active')
                item.querySelector('.cards__posts-item-label').classList.add('active')
            }
            
            if (cards.find((find) => find == item.dataset.slug)) {
                localStorage.setItem('cards', JSON.stringify(cards.filter((find) => find != item.dataset.slug)))
                document
                    .querySelectorAll('.cards__popup-inner .cards__popup-item[data-slug=' + item.dataset.slug + ']')
                    .forEach((item2) => {
                        item2.querySelector('.cards__popup-item-image img').src =
                            '<?php the_block_url(__DIR__); ?>/assets/none.png'
                        item2.classList.remove('active')
                        item2.dataset.slug = ''
                    })
                item.querySelector('.cards__posts-item-label').classList.remove('active')
                if (cards.filter((find) => find != item.dataset.slug).length < 1) {
                    document.querySelector('.cards__popup').classList.remove('active')
                    document.querySelector('.cards__popup').classList.remove('collapsed')
                }
            }
        };
        
        document.querySelectorAll('.cards__posts-item').forEach(function(item) {
            item.removeEventListener('click', set_card_events );
            item.addEventListener('click', set_card_events );
        })
    } */
    
    /**
     * Gets the filters from the local storage
     */
    
    function getFilters() {
        return localStorage.getItem( "filters" ) ? JSON.parse( localStorage.getItem( "filters" ) ) : {};
    }
    
    const filters = getFilters();
    document.querySelectorAll( ".checkbox" ).forEach( ( checkbox ) => {
    	checkbox.addEventListener( "click", function( e ) {
            let p = this.parentNode; //cards__filter-dropdown
                f = p.getAttribute( "data-filter" ), //cards__filter-dropdown data attribute
                selected = [];
                
            setTimeout( () => {
                [].slice.call( p.children ).forEach( function( child ) {
                    if ( child.classList.contains( "active" ) ) {
                        selected.push( child.innerText.trim() );
                    }
                });
                
                filters[ f ] = selected;
                if ( selected.length === 0 ) {
                    delete filters[ f ];
                }
                
                delete filters[ "p" ];
                localStorage.setItem( "filters", JSON.stringify( filters ) );
                getCards();
            }, 0 );
    	});
    });
    
    document.querySelectorAll('.cards__filters-cancel').forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelectorAll('.cards__filter-dropdown-line').forEach(function(filter) {
                filter.classList.remove('active')
            });
            
            if ( typeof slider !== "undefined" ) {
                slider.noUiSlider.set( 0 );
            }
            
            localStorage.setItem( "filters", JSON.stringify( {} ) );
            getCards();
        })
    });
    
    /* document.querySelectorAll('.cards').forEach( function( accordion ) {
        const trigger = accordion.querySelector('.cards__filters-content-button');
        const content = accordion.querySelector('.cards__top');
        
        trigger.addEventListener('click', function() {
            content.classList.toggle('active')
        });
    }); */

    document.querySelectorAll('.cards__filter').forEach(function(picker) {
        picker.querySelector('.cards__filter-header span').addEventListener('click', function() {
            if (!picker.classList.contains('blured')) {
                document.querySelector('.cards__filters').classList.toggle('filter-active')
                this.parentNode.parentNode.classList.toggle('active')
                this.parentNode.parentNode.focus()
            }
        })
        picker.addEventListener('blur', function(e) {
            document.querySelector('.cards__filters').classList.remove('filter-active')
            this.classList.remove('active')
            this.classList.add('blured')
            setTimeout(() => {
                this.classList.remove('blured')
            }, 200)
        })
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        if (document.getElementById('slider')) {
            var slider = document.getElementById('slider')
            noUiSlider.create(slider, {
                start: 10000,
                connect: [true, false],
                range: {
                    min: 0,
                    max: 50000,
                },
                step: 1000,
                tooltips: wNumb({
                    decimals: 3,
                    thousand: '.',
                    prefix: '$',
                }),
            })
        }
        document.querySelectorAll('.noUi-handle').forEach(function(handle) {
            handle.removeAttribute('tabindex')
        })
    });

    document.querySelectorAll('.cards__popup-inner-close').forEach(function(item) {
        item.addEventListener('click', function(label) {
            document.querySelector('.cards__popup').classList.toggle('collapsed')
        })
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
        if (cards.length > 0) {
            document.querySelector('.cards__popup').classList.add('active')
            document.querySelectorAll('.cards__popup-inner .cards__popup-item').forEach((item2, i) => {
                if (i == 0) {
                    if (cards[0]) {
                        item2.querySelector('.cards__popup-item-image img').src = javascript_array.find(card => card.id == cards[0]).image;
                        item2.dataset.slug = cards[0]
                        item2.classList.add('active')
                        if (document
                            .querySelector('.cards__posts-item[data-slug=' + cards[0] + '] .cards__posts-item-label')) {
                            document
                                .querySelector('.cards__posts-item[data-slug=' + cards[0] + '] .cards__posts-item-label')
                                .classList.add('active')
                        }

                    }
                }
                if (i == 1) {
                    if (cards[1]) {
                        item2.querySelector('.cards__popup-item-image img').src = javascript_array.find(card => card.id == cards[1]).image;
                        item2.dataset.slug = cards[1]
                        item2.classList.add('active')
                        if (document
                            .querySelector('.cards__posts-item[data-slug=' + cards[1] + '] .cards__posts-item-label')) {
                            document
                                .querySelector('.cards__posts-item[data-slug=' + cards[1] + '] .cards__posts-item-label')
                                .classList.add('active')
                        }
                    }
                }
                if (i == 2) {
                    if (cards[2]) {
                        item2.querySelector('.cards__popup-item-image img').src = javascript_array.find(card => card.id == cards[2]).image;
                        item2.dataset.slug = cards[2]
                        item2.classList.add('active')
                        if (document
                            .querySelector('.cards__posts-item[data-slug=' + cards[2] + '] .cards__posts-item-label')) {
                            document
                                .querySelector('.cards__posts-item[data-slug=' + cards[2] + '] .cards__posts-item-label')
                                .classList.add('active')
                        }
                    }
                }
            })
        }
    });

    document.querySelectorAll('.cards__popup-btn').forEach(function(item) {
        item.addEventListener('click', function(label) {
            const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
            window.location.href = $globals.bloginfo_url + '/tarjetas/comparar/?query=' + cards.join(',')
        })
    });

    document.querySelectorAll('.cards__popup-item').forEach(function(item) {
        item.querySelector('.cards__popup-item-close').addEventListener('click', function(e) {
            const cards = localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
            if (cards.find((find) => find == item.dataset.slug)) {
                localStorage.setItem('cards', JSON.stringify(cards.filter((find) => find != item.dataset.slug)))
                
                item.querySelector('.cards__popup-item-image img').src =
                    '<?php the_block_url(__DIR__); ?>/assets/none.png'
                document
                    .querySelector('.cards__posts-item[data-slug=' + item.dataset.slug + '] .cards__posts-item-label')
                    .classList.remove('active')
                item.dataset.slug = ''
                item.classList.remove('active')
                
                jQuery( `[data-slug="${item.dataset.slug}"]` ).find( '.cards__posts-item-label' ).removeClass( 'active' );
                
                if (cards.length == 1) {
                    document.querySelector('.cards__popup').classList.remove('active')
                    document.querySelector('.cards__popup').classList.remove('collapsed')
                }
            }
        })
    });
</script>

<style>
    div.cards__posts {
        transition: opacity 125ms linear;
        opacity: 1;
    }
    
    div.cards__posts.is-loading {
        opacity: 0.25;
    }
</style>