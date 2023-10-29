/**
 * This file is for importing support files
 */

import './e2e'
import './web/selectors'
import './web/commands/commonCommands'
import './web/commands/insuranceQuestionnairePage'
import './web/commands/insuranceQuestionnairePersonal'
import './web/commands/insuranceQuestionnaireInsuranceIPDOPD'

import ('faker')

const env_variables = require(`../config_files/env.json`);
export {env_variables};