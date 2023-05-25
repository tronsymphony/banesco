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
$calculator_title = get_field('calculator_title');
$first_input_label = get_field('first_input_label');
$second_input_label = get_field('second_input_label');
$third_input_label = get_field('third_input_label');
$fourth_input_label = get_field('fourth_input_label');
$first_input_description = get_field('first_input_description');
$second_input_description = get_field('second_input_description');
$third_input_description = get_field('third_input_description');
$fourth_input_description = get_field('fourth_input_description');
$first_button_title = get_field('first_button_title');
$second_button_title = get_field('second_button_title');
$first_button_style = get_field('first_button_style');
$second_button_style = get_field('second_button_style');
$results_text = get_field('results_text');
$disclaimer = get_field('disclaimer');

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

$first_button_title = Pacific_Helper::generate_paragraph(array(
  'text'  => $first_button_title,
  'class' => 'calculator-simulator-new__form-button ' . $first_button_style
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
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <div class="calculator-simulator-new__inner-wrapper">
      <?php echo $calculator_title; ?>
      <form class="calculator-simulator-new__form">

        <div class="calculator-simulator-new__input-wrapper">

          <div class="calculator-simulator-new__form-controller">
            <?php echo $first_input_label; ?>
            <select name="load-type" id="load-type" class="calculator-simulator-new__input-field">
              <option value="Vivienda nueva - 120 mil">Vivienda nueva - 120 mil</option>
              <option value="Second Option">Second Option</option>
              <option value="Third Option">Third Option</option>
            </select>
            <?php echo $first_input_description; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $second_input_label; ?>
            <input id="sale-price" type="text" class="calculator-simulator-new__input-field">
            <?php echo $second_input_description; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $third_input_label; ?>
            <input id="initial-allowance" type="text" class="calculator-simulator-new__input-field">
            <?php echo $third_input_description; ?>
          </div>

          <div class="calculator-simulator-new__form-controller">
            <?php echo $fourth_input_label; ?>
            <div class="calculator-simulator-new__input-field calculator-simulator-new__slide-field">
              <div class="calculator-simulator-new__slide-item active">
                20 años
              </div>
              <div class="calculator-simulator-new__slide-item">
                25 años
              </div>
              <div class="calculator-simulator-new__slide-item">
                30 años
              </div>
            </div>
            <?php echo $fourth_input_description; ?>
          </div>

        </div>

        <div class="calculator-simulator-new__button-controller">
          <?php echo $first_button_title; ?>
          <?php echo $second_button_title; ?>
        </div>
      </form>

      <div class="calculator-simulator-new__result-wrapper">
        <div>
          <?php echo $results_text; ?>
        </div>
        <div>
          <p class="calculator-simulator-new__result-text calculator-simulator-new__result-text--right">Abono Inicial $20.000 | $926.35</p>
        </div>
      </div>

      <div class="calculator-simulator-new__disclaimer-wrapper">
        <?php echo $disclaimer; ?>
      </div>
    </div>
  </div>
</section>