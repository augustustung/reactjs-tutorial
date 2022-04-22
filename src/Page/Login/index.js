import React from 'react';
import './login.scss'
import { Form, Input, Button, notification } from 'antd';

function Login(props) {
	const onFinish = (values) => {
	}

	return (
		<main  className="login">
			<div  className="login_form">
				<div className="web-center-block">
					<div className="login_form__title">{translation('landing.login')}</div>
					<div className="enter-frame">
						<Form
							name="login"
							autoComplete="off"
							onFinish={onFinish}
						>
							<Form.Item
								name="username"
							>
								<Input
									type="text"
									size="large"
								/>
							</Form.Item>

							<Form.Item
								name="password"
							>
								<Input
									type="password"
									size="large"
								/>
							</Form.Item>
							<div className="w-100 d-flex justify-content-center">
								<Form.Item>
									<Button
										className="login-btn blue_button"
										htmlType="submit"
										size="large"
									>
										Sign in
									</Button>
								</Form.Item>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Login;