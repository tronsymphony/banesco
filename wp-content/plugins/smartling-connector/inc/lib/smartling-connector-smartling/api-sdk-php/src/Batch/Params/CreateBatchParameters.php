<?php

namespace Smartling\Vendor\Smartling\Batch\Params;
use Smartling\Vendor\Smartling\Parameters\BaseParameters;

/**
 * Class CreateBatchParameters
 *
 * @package Smartling\Vendor\Smartling\Facade\Params
 */
class CreateBatchParameters extends BaseParameters
{

    /**
     * @param $uid
     *
     * @return $this
     */
    public function setTranslationJobUid($uid) {
        $this->set('translationJobUid', $uid);

        return $this;
    }

    /**
     * @param $authorize
     *
     * @return $this
     */
    public function setAuthorize($authorize) {
        $this->set('authorize', (bool) $authorize);

        return $this;
    }

    /**
     * @param $callbackUrl
     *
     * @return $this
     */
    public function setCallbackUrl($callbackUrl) {
        $this->set('callbackUrl', $callbackUrl);

        return $this;
    }

}
