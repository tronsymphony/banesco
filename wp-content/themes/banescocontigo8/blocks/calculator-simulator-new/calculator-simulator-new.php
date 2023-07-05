<?php

/**
 * Calculator - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'calculator-simulator-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block calculator-simulator-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$calculator_options = get_field('calculator_options');
$calculator_title = get_field('calculator_title');
$first_input_label = get_field('first_input_label');
$second_input_label = get_field('second_input_label');
$third_input_label = get_field('third_input_label');
$fourth_input_label = get_field('fourth_input_label');
$fifth_input_label = get_field('fifth_input_label');
$sixth_input_label = get_field('sixth_input_label');
$first_input_description = get_field('first_input_description');
$second_input_description = get_field('second_input_description');
$third_input_description = get_field('third_input_description');
$fourth_input_description = get_field('fourth_input_description');
$fifth_input_description = get_field('fifth_input_description');
$sixth_input_description = get_field('sixth_input_description');
$first_button_title = get_field('first_button_title');
$second_button_title = get_field('second_button_title');
$first_button_style = get_field('first_button_style');
$second_button_style = get_field('second_button_style');
$results_text = get_field('results_text');
$disclaimer = get_field('disclaimer');
$empty_year_error = get_field('empty_year_error');
$empty_full_value_error = get_field('empty_full_value_error');
$empty_first_fee_value_error = get_field('empty_first_fee_value_error');
$year_error_message = get_field('year_error_message');
$first_fee_error_message = get_field('first_fee_error_message');
$first_input_select_value_1 = get_field('first_input_select_value_1');
$first_input_select_value_2 = get_field('first_input_select_value_2');
$second_input_select_value_1 = get_field('second_input_select_value_1');
$second_input_select_value_2 = get_field('second_input_select_value_2');

$calculator_title = Pacific_Helper::generate_paragraph(array(
  'text'  => $calculator_title,
  'class' => 'calculator-simulator-new__title'
));

$first_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $first_input_label,
  'class' => 'calculator-simulator-new__input-label'
));

$second_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $second_input_label,
  'class' => 'calculator-simulator-new__input-label'
));

$third_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $third_input_label,
  'class' => 'calculator-simulator-new__input-label'
));

$fourth_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $fourth_input_label,
  'class' => 'calculator-simulator-new__input-label'
));

$fifth_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $fifth_input_label,
  'class' => 'calculator-simulator-new__input-label'
));

$sixth_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $sixth_input_label,
  'class' => 'calculator-simulator-new__input-label'
));

$first_input_description = Pacific_Helper::generate_paragraph(array(
  'text'  => $first_input_description,
  'class' => 'calculator-simulator-new__input-description'
));

$second_input_description = Pacific_Helper::generate_paragraph(array(
  'text'  => $second_input_description,
  'class' => 'calculator-simulator-new__input-description'
));

$third_input_description = Pacific_Helper::generate_paragraph(array(
  'text'  => $third_input_description,
  'class' => 'calculator-simulator-new__input-description'
));

$fourth_input_description = Pacific_Helper::generate_paragraph(array(
  'text'  => $fourth_input_description,
  'class' => 'calculator-simulator-new__input-description'
));

$fifth_input_description = Pacific_Helper::generate_paragraph(array(
  'text'  => $fifth_input_description,
  'class' => 'calculator-simulator-new__input-description'
));

$second_button_title = Pacific_Helper::generate_paragraph(array(
  'text'  => $second_button_title,
  'class' => 'calculator-simulator-new__form-button clear-fields ' . $second_button_style
));

$results_text = Pacific_Helper::generate_paragraph(array(
  'text'  => $results_text,
  'class' => 'calculator-simulator-new__result-text calculator-simulator-new__result-text--left'
));

$disclaimer = Pacific_Helper::generate_paragraph(array(
  'text'  => $disclaimer,
  'class' => 'calculator-simulator-new__disclaimer-text'
));

$boxed_layout_header = Pacific_Helper::generate_header(array(
	'text' => $calculator_options['header']['title'],
	'tag' => $calculator_options['header']['tag'],
	'class' => 'calculator-simulator-new__boxed-layout-title'
));

$boxed_layout_description = Pacific_Helper::generate_paragraph(array(
  'text'  => $calculator_options['section_description'],
  'class' => 'calculator-simulator-new__boxed-layout-description'
));

$empty_year_error = Pacific_Helper::generate_paragraph(array(
  'text'  => $empty_year_error,
  'class' => 'error-message'
));

$empty_full_value_error = Pacific_Helper::generate_paragraph(array(
  'text'  => $empty_full_value_error,
  'class' => 'error-message'
));

$empty_first_fee_value_error = Pacific_Helper::generate_paragraph(array(
  'text'  => $empty_first_fee_value_error,
  'class' => 'error-message'
));

$year_error_message = Pacific_Helper::generate_paragraph(array(
  'text'  => $year_error_message,
  'class' => 'calculator-simulator-new__errors-text age-error'
));

$first_fee_error_message = Pacific_Helper::generate_paragraph(array(
  'text'  => $first_fee_error_message,
  'class' => 'calculator-simulator-new__errors-text payment-error'
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> <?php echo esc_attr($calculator_options['calculator_layout']); ?>"
  style="
    --top-margin: <?php echo $calculator_options['top_margin']; ?>;
  "
>
  <div class="container">
    <?php if ( $calculator_options['calculator_layout'] == 'boxed' ) : ?>
      <div class="calculator-simulator-new__boxed-layout-content-wrapper">
        <?php echo $boxed_layout_header; ?>
        <?php echo $boxed_layout_description; ?>
      </div>
    <?php endif; ?>
    <div class="calculator-simulator-new__inner-wrapper">
      <?php echo $calculator_title; ?>
      <form class="calculator-simulator-new__form">

        <div class="calculator-simulator-new__input-wrapper">

          <div class="calculator-simulator-new__form-controller">
            <?php echo $first_input_label; ?>
            <div class="calculator-simulator-new__select-wrapper">
              <select name="loanType" id="loanType" class="calculator-simulator-new__input-field">
                <option value="Vivienda Principal"><?php echo $first_input_select_value_1 ?? null; ?></option>
                <option value="Segunda Residencia"><?php echo $first_input_select_value_2 ?? null; ?></option>
              </select>
            </div>
            <?php echo $first_input_description; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $second_input_label; ?>
            <div class="calculator-simulator-new__select-wrapper">
              <select name="property" id="property" class="calculator-simulator-new__input-field">
                <option value="Casa"><?php echo $second_input_select_value_1 ?? null; ?></option>
                <option value="Apartamento"><?php echo $second_input_select_value_2 ?? null; ?></option>
              </select>
            </div>
            <?php echo $second_input_description; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $third_input_label; ?>
            <input type="number" name="age" id="age" class="calculator-simulator-new__input-field">
            <?php echo $third_input_description; ?>
            <?php echo $empty_year_error; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $fourth_input_label; ?>
            <input id="salePrice" name="salePrice" type="number" class="calculator-simulator-new__input-field">
            <?php echo $fourth_input_description; ?>
            <?php echo $empty_full_value_error; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $fifth_input_label; ?>
            <input id="initialAllowance" name="initialAllowance" type="number" class="calculator-simulator-new__input-field">
            <?php echo $fifth_input_description; ?>
            <?php echo $empty_first_fee_value_error; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $sixth_input_label; ?>
            <div class="calculator-simulator-new__input-field calculator-simulator-new__slide-field <?php echo $calculator_options['theme_color']; ?>">
              <div class="calculator-simulator-new__slide-item item-hidden" data-years="5">
                5 años
              </div> 
              <div class="calculator-simulator-new__slide-item item-hidden" data-years="10">
                10 años
              </div>  
              <div class="calculator-simulator-new__slide-item" data-years="15">
                15 años
              </div>
              <div class="calculator-simulator-new__slide-item active" data-years="20">
                20 años
              </div>
              <div class="calculator-simulator-new__slide-item" data-years="25">
                25 años
              </div>
              <div class="calculator-simulator-new__slide-item" data-years="30">
                30 años
              </div>
            </div>
            <input type="hidden" id="loanYears" name="loanYears" value="20">
            <?php echo $sixth_input_description; ?>
          </div>

        </div>

        <div class="calculator-simulator-new__button-controller">
          <?php if ( $first_button_title ) : ?>
            <button type="submit" class="calculator-simulator-new__form-button calculate-button <?php echo $first_button_style; ?>"><?php echo $first_button_title; ?></button>
          <?php endif; ?>
            <?php echo $second_button_title; ?>
        </div>
        <div class="calculator-simulator-new__form-errors">
          <?php echo $year_error_message; ?>
          <?php echo $first_fee_error_message; ?>
        </div>
      </form>
      <div class="calculator-simulator-new__form-footer">
        <div class="calculator-simulator-new__result-wrapper <?php echo $calculator_options['theme_color']; ?>">
          <div>
            <?php echo $results_text; ?>
          </div>
          <div>
            <p class="calculator-simulator-new__result-text calculator-simulator-new__result-text--right"></p>
          </div>
        </div>
        <div class="calculator-simulator-new__disclaimer-wrapper">
          <?php echo $disclaimer; ?>
        </div>
      </div>
    </div>
  </div>
</section>