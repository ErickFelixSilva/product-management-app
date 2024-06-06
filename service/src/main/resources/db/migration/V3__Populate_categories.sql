-- Insert parent categories
INSERT INTO category (name) VALUES ('Electronics');
INSERT INTO category (name) VALUES ('Books');
INSERT INTO category (name) VALUES ('Clothing');
INSERT INTO category (name) VALUES ('Home & Kitchen');
INSERT INTO category (name) VALUES ('Sports & Outdoors');

-- Get IDs of parent categories
SET @electronicsId = (SELECT id FROM category WHERE name = 'Electronics');
SET @booksId = (SELECT id FROM category WHERE name = 'Books');
SET @clothingId = (SELECT id FROM category WHERE name = 'Clothing');
SET @homeKitchenId = (SELECT id FROM category WHERE name = 'Home & Kitchen');
SET @sportsOutdoorsId = (SELECT id FROM category WHERE name = 'Sports & Outdoors');

-- Insert child categories
INSERT INTO category (name, parent_category_id) VALUES ('Mobile Phones', @electronicsId);
INSERT INTO category (name, parent_category_id) VALUES ('Laptops', @electronicsId);
INSERT INTO category (name, parent_category_id) VALUES ('Fiction', @booksId);
INSERT INTO category (name, parent_category_id) VALUES ('Non-fiction', @booksId);
INSERT INTO category (name, parent_category_id) VALUES ('Men', @clothingId);
INSERT INTO category (name, parent_category_id) VALUES ('Women', @clothingId);
INSERT INTO category (name, parent_category_id) VALUES ('Kitchen Appliances', @homeKitchenId);
INSERT INTO category (name, parent_category_id) VALUES ('Home Decor', @homeKitchenId);
INSERT INTO category (name, parent_category_id) VALUES ('Outdoor Games', @sportsOutdoorsId);
INSERT INTO category (name, parent_category_id) VALUES ('Gym Equipment', @sportsOutdoorsId);