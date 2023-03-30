<?php

return array(
    'validate_required'                 => 'The {field} field is required.',
    'validate_valid_email'              => 'The {field} field must be a valid email address.',
    'validate_max_len'                  => 'The {field} field must not exceed {param} characters in length.',
    'validate_min_len'                  => 'The {field} field must be at least {param} characters in length.',
    'validate_exact_len'                => 'The {field} field must not exceed {param} characters in length.',
    'validate_alpha'                    => 'The {field} field may only contain letters.',
    'validate_alpha_numeric'            => 'The {field} field may only contain letters and numbers.',
    'validate_alpha_dash'               => 'The {field} field may only contain letters and dashes.',
    'validate_alpha_space'              => 'The {field} field may only contain letters and spaces.',
    'validate_numeric'                  => 'The {field} field must be a number.',
    'validate_integer'                  => 'The {field} field must be a number without a decimal.',
    'validate_valid_boolean'            => 'The {field} field has to be either true or false.',
    'validate_decimal'                  => 'The {field} field must contain a decimal number.',
    'validate_valid_url'                => 'The {field} field must contain a valid URL.',
    'validate_url_exists'               => 'The {field} URL does not exist.',
    'validate_valid_ip'                 => 'The {field} field needs to be a valid IP address.',
    'validate_valid_credit_card'        => 'The {field} field must contain a valid credit card number.',
    'validate_valid_name'               => 'The {field} should be a valid name.',
    'validate_contains_list'            => 'The {field} selected is invalid.',
    'validate_valid_date'               => 'The {field} must be a valid date.',
    'validate_min_numeric'              => 'The {field} field must contain a number, equal to or greater than {param}.',
    'validate_max_numeric'              => 'The {field} field must contain a number, equal to or less than {param}.',
    'validate_min_age'                  => 'The {field} field needs to have an age greater than or equal to {param}.',
    'validate_invalid'                  => 'The {field} field is invalid.',
    'validate_starts'                   => 'The {field} field needs to start with {param}',
    'validate_extensions'                => 'The {field} field can only have one of the following extensions: {param}',
    'validate_required_file'            => 'The {field} field is required',
    'validate_equalsfield'              => 'The {field} field does not equal {param} field',
    'validate_phone_number'             => 'The {field} field needs to be a valid Phone Number',
    'validate_regex'                    => 'The {field} field needs to contain a value with valid format',
	'validate_is_natural_no_zero'   	=> 'The {field} field must contain a number greater than zero.',
	'validate_is_natural' 				=> 'The {field} field must contain only positive numbers.',
	'validate_greater_than_date'		=> 'The {field} field must contain a more recent date than {param}.',
    'validate_less_than_date'			=> 'The {field} field must contain an older date than {param}.',
    'validate_greater_than_or_equal_date' => 'The {field} field must contain a date that\'s at least as recent as {param}.',
    'validate_less_than_or_equal_date'	=> 'The {field} field must contain a date that\'s {param} or older.',
	'validate_valid_filesize'			=> 'The {field} uploaded size exceeds the allowable limit {param}.',
	'validate_is_valid_file'			=> 'The {field} uploading encountered error.',
);
