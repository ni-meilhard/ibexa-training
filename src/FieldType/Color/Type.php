<?php

namespace App\FieldType\Color;

use App\Form\Type\ColorType;
use Ibexa\Contracts\Core\FieldType\Generic\Type as GenericType;
use Ibexa\Contracts\ContentForms\Data\Content\FieldData;
use Ibexa\Contracts\ContentForms\FieldType\FieldValueFormMapperInterface;
use Symfony\Component\Form\FormInterface;


final class Type extends GenericType implements FieldValueFormMapperInterface
{
    public function getFieldTypeIdentifier(): string
    {
        return 'color';
    }

    public function mapFieldValueForm(FormInterface $fieldForm, FieldData $data): void
    {
        $definition = $data->fieldDefinition;

        $fieldForm->add('value', ColorType::class, [
            'required' => $definition->isRequired,
            'label' => $definition->getName()
        ]);
    }
}
