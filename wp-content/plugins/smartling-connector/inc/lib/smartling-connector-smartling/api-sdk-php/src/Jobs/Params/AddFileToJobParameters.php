<?php

namespace Smartling\Vendor\Smartling\Jobs\Params;
use Smartling\Vendor\Smartling\Parameters\BaseParameters;

/**
 * Class AddFileToJobParameters
 * @package Jobs\Params
 */
class AddFileToJobParameters extends BaseParameters
{

    /**
     * @param string $fileUri
     */
    public function setFileUri($fileUri) {
        $this->set('fileUri', $fileUri);
    }

    /**
     * @param array $targetLocales
     */
    public function setTargetLocales(array $targetLocales = []) {
        $this->set('targetLocaleIds', $targetLocales);
    }

}
