INSERT INTO role (name) VALUES ('ROLE_USER');
INSERT INTO role (name) VALUES ('ROLE_ADMIN');

INSERT INTO users (username, password) VALUES ('pm_admin', '$2b$12$me.noHxbuw3b5tuieunVyuQkQnCiyd1Edk.hx9I7nnYoE9jARgxIy');

INSERT INTO user_roles (user_id, role_id) VALUES (
    (SELECT id FROM users WHERE username = 'pm_admin'),
    (SELECT id FROM role WHERE name = 'ROLE_ADMIN')
);