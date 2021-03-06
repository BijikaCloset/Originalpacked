/*
 *
 * Account
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import AccountDetails from '../../components/AccountDetails';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import Checkbox from '../../components/Checkbox';
import SubPage from '../../components/SubPage';

class Account extends React.PureComponent {
  componentDidMount() {
    // this.props.fetchProfile();
  }

  render() {
    const {
      user,
      isFormOpen,
      accountChange,
      updateProfile,
      resetFormData,
      formErrors,
      resetPasswordChange,
      toggleResetForm,
      resetAccountPassword
    } = this.props;

    return (
      <div className='account'>
        <SubPage title={'Account Page'} isMenuOpen={null}>
          <AccountDetails
            user={user}
            accountChange={accountChange}
            updateProfile={updateProfile}
          />
          {user.provider === 'email' && (
            <div>
              {/* <Checkbox
                id={'toggle'}
                label={'Reset Password'}
                checked={isFormOpen}
                toggleCheckboxChange={toggleResetForm}
              /> */}
              <div
                className={isFormOpen ? 'reset-form-open' : 'reset-form-hidden'}
              >
                <div className='reset-form'>
                  <h1>Reset Password</h1>
                  <ResetPasswordForm
                    resetFormData={resetFormData}
                    formErrors={formErrors}
                    resetPasswordChange={resetPasswordChange}
                    resetPassowrd={resetAccountPassword}
                  />
                </div>
                <div
                  className={isFormOpen ? 'dark-overflow' : ''}
                  onClick={toggleResetForm}
                />
              </div>
            </div>
          )}
        </SubPage>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.user,
    isFormOpen: state.account.isFormOpen,
    resetFormData: state.resetPassword.resetFormData,
    formErrors: state.resetPassword.formErrors
  };
};

export default connect(mapStateToProps, actions)(Account);
