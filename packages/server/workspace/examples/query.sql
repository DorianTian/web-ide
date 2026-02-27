-- 示例 SQL 查询
SELECT
    u.user_id,
    u.username,
    COUNT(o.order_id) AS order_count,
    SUM(o.amount) AS total_amount
FROM
    users u
    LEFT JOIN orders o ON u.user_id = o.user_id
WHERE
    u.created_at >= '2024-01-01'
GROUP BY
    u.user_id,
    u.username
HAVING
    COUNT(o.order_id) > 5
ORDER BY
    total_amount DESC
LIMIT
    1000;


SELECT
    *
FROM
    orders
ORDER BY created_at DESC 