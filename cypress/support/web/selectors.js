/** This file is for containing selectors of web elements.
 * Each group of selector is categorized based on its feature.
 * lbl = regular labels eg.text box, screen background
 * btn = buttons
 * tab = tabs
 * ddl = dropdown
 */

const QUESTIONNAIRE_SELECTORS = {
    RABBITCARE_LOGO: 'img[alt="Rabbit Care Logo"]',
    QUESTIONNAIRE_FORM: 'form[data-testid="questionflow-component-main"]',
    QUESTIONNAIRE_PROGRESS_BAR: '.RSPBprogressBar',
    PROGRESS_BAR_PERSONAL: '.RSPBprogressBar > div:nth-child(1) > .rf-progress-bar__outer-icon',
    PROGRESS_BAR_INSURANCE: '.RSPBprogressBar > div:nth-child(2) > .rf-progress-bar__outer-icon',
    PROGRESS_BAR_QUOTES: '.RSPBprogressBar > div:nth-child(3) > .rf-progress-bar__outer-icon',
    ADVISOR_CALL_TITLE: '[data-testid="calling-time"]',
    ADVISOR_CALL_ASAP: '[data-testid="call-prefrence-asap"]',
    ADVISOR_CALL_SPECIFIC: '[data-testid="call-prefrence-specific-time"]',
    DAY_AND_TIME_TAB: '.calling-time-selection',
    DAY_AND_TIME_DDL: '.calling-time-option-item',
    DAY_AND_TIME_NEXT_BTN: '.calling-time-next-btn',
    CONSENT_TAB: '[data-testid="tc"]',
    CONSENT_BTN: '.form-check-label',
    SHOW_PACKAGES_BTN: '#btn-marketing-consent'
}

export { QUESTIONNAIRE_SELECTORS }

const QUESTIONNAIRE_PERSONAL_SELECTORS = {
    GENDER_M_BOX: '[data-testid="div-customer_gender-M"]',
    GENDER_F_BOX: '[data-testid="div-customer_gender-F"]',
    GENDER_M_BTN: '[for="customer_gender-M"]',
    GENDER_F_BTN: '[for="customer_gender-F"]',
    NATIONALITY_TITLE: '[for="customer_is_thai_national"]',
    NATIONALITY_THAI_BTN: '[for="customer_is_thai_national-Y"]',
    NATIONALITY_FOREIGN_BTN: '[for="customer_is_thai_national-N"]',
    DOB_TITLE: '[for="customer_dob"]',
    DOB_LBL: '[name="customer_dob"]',
    DOB_TAB: '[data-testid="customer_dob"]',
    DOB_ERROR_MESSAGE: '.invalid-feedback',
    PHONE_COUTRY_CODE_TITLE: '[for="customer_countrycode"]',
    PHONE_TITLE: '[for="customer_phone"]',
    PHONE_LBL: '[data-testid="phone-input"]',
    PHONE_COUTRY_CODE_DDL: '[name="customer_countrycode"]',
    PHONE_TAB: '[data-testid="customer_countrycode"]',
    FIRST_NAME_TITLE: '[for="customer_first_name"]',
    FIRST_NAME_LBL: '[name="customer_first_name"]',
    LAST_NAME_TITLE: '[for="customer_last_name"]',
    LAST_NAME_LBL: '[name="customer_last_name"]',
    FIRST_LAST_NAME_TAB: '[data-testid="customer_first_name"]',
    EMAIL_TITLE: '[for="customer_email"]',
    EMAIL_LBL: '.email-dropdown__input-group',
    EMAIL_TAB: '[data-testid="customer_email"]'
}

export { QUESTIONNAIRE_PERSONAL_SELECTORS }

const QUESTIONNAIRE_INSURANCE_SELECTORS = {
    PRODUCT_CATEGORY_TITLE: '[for="product_category"]',
    IPD_OPD_BTN: '[data-testid="div-product_category-ipdOpd"]',
    SPECIFIC_DISEASE_BTN: '[data-testid="div-product_category-disease"]',
    PERSONAL_ACCIDENT_BTN: '[data-testid="div-product_category-pa"]',
    TYPE_OPD_IPD_TITLE: '[for="ipdopdtype"]',
    NEW_HEALTHCARE_OPD_IPD_BTN: '[for="ipdopdtype-type_1"]',
    EXISTING_HEALTHCARE_OPD_IPD_BTN: '[for="ipdopdtype-type_2"]',
    PLAN_OPD_IPD_TITLE: '[for="product_ipdopd_subcategory"]',
    PLAN_OPD_IPD_INDIVIDUALS_BTN: '[for="product_ipdopd_subcategory-individuals"]',
    PLAN_OPD_IPD_ELITE_BTN: '[for="product_ipdopd_subcategory-elite"]',
    PLAN_OPD_IPD_EXPATS_BTN: '[for="product_ipdopd_subcategory-expats"]',
    ADDITIONAL_COVERAGE_CHECKBOX: '.checkbox-custom',
    ADDITIONAL_COVERAGE_TAB: '[data-testid="ipdopdcoverage"]'
}

export { QUESTIONNAIRE_INSURANCE_SELECTORS }