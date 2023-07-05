<?php

/**
 * Calculator - Autos Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'calculator-autos-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block calculator-autos-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$calculator_title = get_field('calculator_title');
$first_input_label = get_field('first_input_label');
$first_select_value = get_field('first_select_value');
$second_select_value = get_field('second_select_value');
$second_input_label = get_field('second_input_label');
$third_input_label = get_field('third_input_label');
$fourth_input_label = get_field('fourth_input_label');
$fifth_input_label = get_field('fifth_input_label');
$submit_button = get_field('submit_button');
$clear_button = get_field('clear_button');
$form_theme_color = get_field('form_theme_color');
$empty_field_error_text = get_field('empty_field_error_text');
$age_error_text = get_field('age_error_text');
$payment_error_text_new = get_field('payment_error_text_new');
$payment_error_text_used = get_field('payment_error_text_used');
$month_error_text_new = get_field('month_error_text_new');
$month_error_text_used = get_field('month_error_text_used');
$result_text_left = get_field('result_text_left');
$disclaimer = get_field('disclaimer');
$block_options = get_field('block_options');

$calculator_title = Pacific_Helper::generate_paragraph(array(
  'text'  => $calculator_title,
  'class' => 'calculator-autos-new__title'
));

$first_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $first_input_label,
  'class' => 'calculator-autos-new__input-label'
));

$second_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $second_input_label,
  'class' => 'calculator-autos-new__input-label'
));

$third_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $third_input_label,
  'class' => 'calculator-autos-new__input-label'
));

$fourth_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $fourth_input_label,
  'class' => 'calculator-autos-new__input-label'
));

$fifth_input_label = Pacific_Helper::generate_paragraph(array(
  'text'  => $fifth_input_label,
  'class' => 'calculator-autos-new__input-label'
));

$empty_field_error_text = Pacific_Helper::generate_paragraph(array(
  'text'  => $empty_field_error_text,
  'class' => 'calculator-autos-new__errors-text empty-field-error'
));

$age_error_text = Pacific_Helper::generate_paragraph(array(
  'text'  => $age_error_text,
  'class' => 'calculator-autos-new__errors-text age-error'
));

$payment_error_text_new = Pacific_Helper::generate_paragraph(array(
  'text'  => $payment_error_text_new,
  'class' => 'calculator-autos-new__errors-text payment-error-new'
));

$payment_error_text_used = Pacific_Helper::generate_paragraph(array(
  'text'  => $payment_error_text_used,
  'class' => 'calculator-autos-new__errors-text payment-error-used'
));

$month_error_text_new = Pacific_Helper::generate_paragraph(array(
  'text'  => $month_error_text_new,
  'class' => 'calculator-autos-new__errors-text months-new'
));

$month_error_text_used = Pacific_Helper::generate_paragraph(array(
  'text'  => $month_error_text_used,
  'class' => 'calculator-autos-new__errors-text months-used'
));

$result_text_left = Pacific_Helper::generate_paragraph(array(
  'text'  => $result_text_left,
  'class' => 'calculator-autos-new__result-text calculator-autos-new__result-text--left'
));

$disclaimer = Pacific_Helper::generate_paragraph(array(
  'text'  => $disclaimer,
  'class' => 'calculator-autos-new__disclaimer-text'
));

?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"
style="
  --padding-top: <?php echo $block_options['padding_top']; ?>;
  --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
  --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
  --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
  --margin-top: <?php echo $block_options['margin_top']; ?>;
  --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
  --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
  --margin-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;
">
  <div class="container">
    <div class="calculator-autos-new__inner-wrapper">
      <?php echo $calculator_title; ?>
      <form action="" class="calculator-autos-new__form">
        <div class="calculator-autos-new__input-wrapper">
          <div class="calculator-autos-new__form-controller calculator-autos-new__form-controller--xl">
            <?php echo $first_input_label; ?>
            <div class="calculator-autos-new__select-wrapper">
              <select name="carType" id="carType" class="calculator-autos-new__input-field">
                <option value="Auto Nuevo"><?php echo $first_select_value ? $first_select_value : null; ?></option>
                <option value="Autos Usado"><?php echo $second_select_value ? $second_select_value : null; ?></option>
              </select>
            </div>
          </div>
          <div class="calculator-autos-new__form-controller calculator-autos-new__form-controller--md">
            <?php echo $second_input_label; ?>
            <input type="number" name="carValue" id="carValue" class="calculator-autos-new__input-field">
          </div>
          <div class="calculator-autos-new__form-controller calculator-autos-new__form-controller--md">
            <?php echo $third_input_label; ?>
            <input type="number" name="firstFee" id="firstFee" class="calculator-autos-new__input-field">
          </div>
          <div class="calculator-autos-new__form-controller calculator-autos-new__form-controller--sm">
            <?php echo $fourth_input_label; ?>
            <input type="number" name="loanTerm" id="loanTerm" class="calculator-autos-new__input-field">
          </div>
          <div class="calculator-autos-new__form-controller calculator-autos-new__form-controller--sm">
            <?php echo $fifth_input_label; ?>
            <input type="number" name="clientAge" id="clientAge" class="calculator-autos-new__input-field">
          </div>
        </div>
        <div class="calculator-autos-new__button-controller">
          <?php if ( $submit_button['submit_button_title'] ) : ?>
            <button type="submit" class="calculator-autos-new__form-button <?php echo $submit_button['submit_button_style']; ?> calculate-autos-button"><?php echo $submit_button['submit_button_title']; ?></button>
          <?php endif; ?>
          <?php if ( $clear_button['clear_button_title'] ) : ?>
            <button type="reset" class="calculator-autos-new__form-button <?php echo $clear_button['clear_button_style']; ?> clear-autos-button"><?php echo $clear_button['clear_button_title']; ?></button>
          <?php endif; ?>
        </div>
      </form>
      <div class="calculator-autos-new__form-errors">
        <?php echo $empty_field_error_text; ?>
        <?php echo $age_error_text; ?>
        <?php echo $payment_error_text_new; ?>
        <?php echo $payment_error_text_used; ?>
        <?php echo $month_error_text_new; ?>
        <?php echo $month_error_text_used; ?>
      </div>
      <div class="calculator-autos-new__form-footer">
        <div class="calculator-autos-new__result-wrapper <?php echo $form_theme_color; ?>">
          <div>
            <?php echo $result_text_left; ?>
          </div>
          <div>
            <p class="calculator-autos-new__result-text calculator-autos-new__result-text--right"></p>
          </div>
        </div>
        <div class="calculator-autos-new__disclaimer-wrapper">
          <?php echo $disclaimer; ?>
        </div>
      </div>
    </div>
  </div>
</section>