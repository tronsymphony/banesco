<?php

/**
 * Terms customizer register.
 */

function terms_customizer($wp_customize)
{
  $wp_customize->add_section(
    'terms_customizer',
    [
      'title' => 'Terms Section',
      'priority' => 112,
    ]
  );
  $wp_customize->add_setting('terms_title', ['default' => 'Términos y condicioness']);
  $wp_customize->add_setting('terms_content', ['default' => '<p>
      Aprobado por la J.C.J mediante resolución N° MEF-RES-2022 1527 del 15 de junio de 2022 y resolución No. MEF-RES-2022-1485 del 9 de junio de 2022. Banesco te invita a obtener su tarjeta edición especial VISA Copa Mundial de la FIFA. Con la cual estarás participando para ganar un viaje a Qatar y ver la semifinal del mundial de fútbol Qatar 2022. La tómbola se llevará a cabo el 7 de noviembre del 2022, a las 10:00 AM en la torre Banesco piso 20. La tómbola será electrónica. El cliente con la mayor acumulación de boletos electrónicos tendrá mayor posibilidades de ganar. La acumulación de boletos será de la siguiente manera: 75 boletos por la adquisición de la tarjeta Visa Copa Mundial de la FIFA, 25 boletos por la adquisición de cualquier otra tarjeta Visa; 1 Boleto por cada $20.00 de consumo con cualquier tarjeta Visa y 2 boletos por cada $20.00 de consumo con la tarjeta Visa Copa Mundial de la FIFA. Además, se otorgarán 10 boletos por cada compra de saldo y 5 boletos por cada $100.00 de consumo mediante el servicio 2x3. El premio incluye: pasaje aéreo ida y vuelta a Qatar, saliendo de Panamá el 11 de diciembre del 2022 y regresando el 15 de diciembre de 2022. Hospedaje por 5 días y 4 noches en hotel de lujo, en Doha. Transporte incluidos hacia los partidos, incluido vuelo interno entre ciudades. 2 entradas a la semifinal. 1 actividad grupal / tour. 1 visa prepago por $500.00 Aplican solo clientes tarjeta de crédito Visa que se encuentren al día con sus pagos. Residentes en la ciudad de Panamá. Se excluye la participación de banca internacional o empresarial. El ganador como su acompañante deben contar con visas y pasaporte vigente para llegar al destino final. El acompañante deberá ser mayor a 16 años. No participan menores de edad, colaboradores Banesco o subsidiarias de seguro. El cliente ganador deberá aceptar las condiciones de la premiación y tener la disponibilidad durante las fechas específicas. De no poder aceptar el premio, el cliente lo informará el día de llamada durante el sorteo electrónico, en esta oportunidad se volverá a realizar la tómbola hasta lograr el ganador que cumplan con las condiciones pautadas y acepte las condiciones establecidas. Los premios no serán canjeables por efectivo o por un viaje distinto al programado por Visa. Resolución No. MEF-RES-2022-1485 del 9 de junio de 2022.
    </p>
    <p>
      <b>Términos y condiciones de las promociones mundialistas:</b>
    <br />
      El 35% del descuento ofrecido por Hyundai será aplicado desde el 15 de agosto del 2022 al 31 de diciembre del 2022 aplicado directamente por la marca en la factura del cliente en los servicios de mantenimiento y repuestos en los talles Hyundai, aplica únicamente para nuestra tarjeta Visa Copa Mundial de la FIFA hasta un tope de $150.00 por servicio. <br /> Todo cliente que obtenga su tarjeta Visa Copa Mundial del Mundo y desee adquirir un vehículo con Hyundai disfrutará de pagar su abono inicial al 0% interés a 12, 24 o 36 meses máximo, este beneficio dependerá del límite aprobado en la tarjeta y el disponible que el cliente posea al momento de efectuar su compra. Beneficio aplicado por Hyundai. Además, recibirás tu alarma o costo de placa gratis según selección, no aplican los dos beneficios en conjunto, el mismo no es canjeable por otros servicios o beneficios. <br /> El 30% de descuento en Budweiser será a través de la aplicación Drink’s Market, mediante un cupón de descuento otorgado en la adquisición de su tarjeta, su tope mensual será de $30.00 Válido hasta diciembre del 2022. Además, recibirá un cupón de descuento del 10% aplicable para sus compras futuras, tope de 5 compras por mes hasta un tope de $30,00. Válido desde septiembre a diciembre del 2022. Los premios de bienvenida varían de acuerdo a la existencia y con cantidades limitadas entre puntos de bienvenida que serán acreditados 48 horas después. Cupones para consumo en McDonald’s en la zona de Panamá centro o cupones para Adidas que pueden utilizarse exclusivamente en tiendas Adidas performance de Albrook Mall y Adidas performance de Multiplaza hasta diciembre del 2022. Los cupones no podrán ser canjeados por efectivos u otros premios.
    <br />
      No nos hacemos responsables por el deterioro o pérdida del cupón. El beneficio será otorgado por el comercio por lo que Banesco no es responsable de la aplicación del descuento sobre la compra a efectuar. Los beneficios en puntuación serán promocionales y cambiarán por temporada durante el periodo de vigencia de la promoción. Temporada del 15 de agosto al 31 de diciembre. Estos beneficios y descuentos son exclusivos para clientes que soliciten y realicen consumos con la tarjeta de crédito Visa Copa Mundial de la FIFA.
    <br />
    </p>']);
  $wp_customize->add_control(new WP_Customize_Control(
    $wp_customize,
    'terms_title',
    [
      'label' => 'Title',
      'section' => 'terms_customizer'
    ]
  ));
  $wp_customize->add_control(new WP_Customize_Control(
    $wp_customize,
    'terms_content',
    [
      'label' => 'Content',
      'section' => 'terms_customizer',
      'type' => 'textarea'
    ]
  ));
};

add_action('customize_register', 'terms_customizer');
