<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Smartling\Vendor\Symfony\Component\DependencyInjection\LazyProxy\Instantiator;
use Smartling\Vendor\Symfony\Component\DependencyInjection\ContainerInterface;
use Smartling\Vendor\Symfony\Component\DependencyInjection\Definition;

/**
 * {@inheritdoc}
 *
 * Noop proxy instantiator - simply produces the real service instead of a proxy instance.
 *
 * @author Marco Pivetta <ocramius@gmail.com>
 */
class RealServiceInstantiator implements InstantiatorInterface
{
    /**
     * {@inheritdoc}
     */
    public function instantiateProxy(ContainerInterface $container, Definition $definition, $id, $realInstantiator)
    {
        return \call_user_func($realInstantiator);
    }
}
