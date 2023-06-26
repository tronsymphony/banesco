<?php

/**
 * loan-calculator-acf Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'loan-calculator-acf-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block loan-calculator-acf';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <?php

/**
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 *
 * @package banescocontigo
 */

?>

    <section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
        <div class="tabs-loan loan-calculator-acf" style="
      --paddings-top: <?= (isset($attributes['paddings']['desktop']['top'])) ? $attributes['paddings']['desktop']['top'] : '0px' ?>;
      --paddings-top--mobile: <?= (isset($attributes['paddings']['mobile']['top'])) ? $attributes['paddings']['mobile']['top'] : '0px' ?>;
      --paddings-bottom: <?= (isset($attributes['paddings']['desktop']['bottom'])) ? $attributes['paddings']['desktop']['bottom'] : '0px' ?>;
      --paddings-bottom--mobile: <?= (isset($attributes['paddings']['mobile']['bottom'])) ? $attributes['paddings']['mobile']['bottom'] : '0px' ?>;
      --margins-top: <?= (isset($attributes['margins']['desktop']['top'])) ? $attributes['margins']['desktop']['top'] : '0px' ?>;
      --margins-top--mobile: <?= (isset($attributes['margins']['mobile']['top'])) ? $attributes['margins']['mobile']['top'] : '0px' ?>;
      --margins-bottom: <?= (isset($attributes['margins']['desktop']['bottom'])) ? $attributes['margins']['desktop']['bottom'] : '0px' ?>;
      --margins-bottom--mobile: <?= (isset($attributes['margins']['mobile']['bottom'])) ? $attributes['margins']['mobile']['bottom'] : '0px' ?>;
      --gradient: <?= (isset($attributes['gradient'])) ? $attributes['gradient'] : '#fff' ?>;
    ">
            <div class="container">
                <div class="tabs-loan__wrapper" data-tabs>

                    <div class="tabs-loan__body" data-body>
                        <div class="tabs-loan__content" data-id="#línea-paralela">

                        </div>
                        <div class="tabs-loan__content" data-id="#personales">
                            <h2 class="tabs-loan__title">
                                <span ><?php echo get_field('title'); ?></span>
                            </h2>
                            <div class="tabs-loan__line">
                                <div class="tabs-loan__item tabs-loan__item--slider">
                                    <h3 class="tabs-loan__item-title">
                                        <span class="">Monto a solicitar</span>
                                    </h3>
                                    <div class="tabs-loan_slider rd-slider" data-min="0" data-max="150000"
                                        data-set="50000" data-step="1000">
                                        <button class="rd-slider__button rd-slider__button--min">min</button>
                                        <div class="rd-slider__content"></div>
                                        <button class="rd-slider__button rd-slider__button--max">max</button>
                                    </div>
                                </div>
                                <div class="tabs-loan__item tabs-loan__item--counter">
                                    <h3 class="tabs-loan__item-title">
                                        <span class="">Plazo en meses</span>
                                    </h3>
                                    <div class="tabs-loan__counter counter" data-min="1" data-max="12" data-set="1">
                                        <input type="number" hidden="">
                                        <button class="counter__button counter__button--minus disabled"></button>
                                        <div class="counter__content" id="meses">1</div>
                                        <button class="counter__button counter__button--plus"></button>
                                    </div>
                                </div>
                                <div class="tabs-loan__item tabs-loan__item--counter">
                                    <h3 class="tabs-loan__item-title">
                                        <span class="">Tasa</span>
                                    </h3>
                                    <div class="tabs-loan__counter counter counter_percent" data-min="1" data-max="40" data-set="5">
                                        <input type="number" hidden="">
                                        <button class="counter__button counter__button--minus disabled"></button>
                                        <div class="counter__content" id="interest">5</div>
                                        <button class="counter__button counter__button--plus"></button>
                                    </div>
                                </div>

                                <div class="tabs-loan__item">
                                    <div class="tabs-loan__buttons">
                                        <button class="tabs-loan__button primary-button button2" id="button2">
                                            <span class="">Simular otra vez</span>
                                        </button>
                                        <button class="tabs-loan__button primary-button button2" id="resetbtn">
                                            <span class=""><?php _e('Limpiar Campos'); ?></span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div class="tabs-loan__hidden2" id="hidden_loan">
                                <div class="tabs-loan__block">
                                    <div class="tabs-loan__block-first">
                                        <span><?php echo get_field('results_text'); ?></span>
                                        <span>RD$ <span id="loan_payment"></span></span>
                                    </div>
                                </div>
                                <div class="tabs-loan__info">
                                    <div class="tabs-loan__info-inner">
                                        <?php echo get_field('additional_text'); ?>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>


 

    <script>


function computeLoan(loanAmount,meses,interest){
    const amount = loanAmount
    const interest_rate = interest
    const months = meses

    var principal = parseFloat(amount);
    var interestCalc = parseFloat(interest_rate) / 100 / 12;
    var payments = parseFloat(months);
  
    // compute the monthly payment figure
    var x = Math.pow(1 + interestCalc, payments); //Math.pow computes powers
    var monthly = Math.floor((principal*x*interestCalc)/(x-1));


    const interest_number = (amount * (interest_rate * 0.01)) / months;

    // (Principal Amount × Annual Interest Rate × Loan Tenure) / 100
    // let payment = ((amount / months) + .2).toFixed(2); 
    // let payment = (amount * interest_rate * months) / 100;

    // payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 

    // console.log(interest_number,payment,interest,monthly)

    document.querySelector('#loan_payment').innerHTML = `${monthly}`
}

    document.querySelectorAll('.tabs-loan').forEach(function(calculator) {


        const loanSubmit = calculator.querySelector('#button2')
        const setBtn = calculator.querySelector('#resetbtn')

        loanSubmit.addEventListener('click', function(e) {
                let loanAmount = parseInt(document.querySelectorAll('.noUi-handle')[0].ariaValueNow);
                let mesesAmount = parseInt(document.getElementById('meses').innerHTML);
                let interestAmount = parseInt(document.getElementById('interest').innerHTML)
                computeLoan(loanAmount,mesesAmount,interestAmount)
                document.querySelector('#hidden_loan').classList.add('active')
        })

        setBtn.addEventListener('click', function(e) {
                document.querySelectorAll('.noUi-handle')[0].ariaValueNow = 50000;
                document.getElementById('meses').innerHTML = 1;
                document.getElementById('interest').innerHTML = 5;

                document.querySelector('#hidden_loan').classList.remove('active')
        })
    })
    </script>

    <script>
    // new class Tabs {

    //     constructor() {
    //         this.$wrapper;
    //         this.$triggers;
    //         this.$body;
    //         this.init();
    //     }

    //     init() {
    //         document.querySelectorAll('[data-tabs]').forEach((wrapper) => {
    //             this.$wrapper = wrapper;
    //             // this.$triggers = [...wrapper.querySelector('[data-triggers]').children];
    //             this.$body = [...wrapper.querySelector('[data-body]').children];
    //             this.$triggers[1].classList.add('active');
    //             this.$body[1].classList.add('active');
    //             this.update();
    //             this.addListenerClick();
    //             this.addListenerHash();
    //         });
    //     }

    //     update(event) {
    //         const trigger = this.$wrapper.querySelector(`a[href="${window.location.hash}"]`);
    //         const content = this.$wrapper.querySelector(`[data-id="${window.location.hash}"]`);

    //         if (window.location.hash && trigger && content) {

    //             this.$triggers.forEach((trigger) => {
    //                 trigger.classList.remove('active');
    //             });

    //             this.$body.forEach((content) => {
    //                 content.classList.remove('active');
    //             });

    //             trigger.classList.add('active');
    //             content.classList.add('active');
    //         }

    //         sessionStorage.setItem("last-url", event?.oldURL);
    //     }

    //     addListenerHash() {
    //         window.addEventListener('hashchange', this.update.bind(this));
    //     }

    // };
    </script>
</section>