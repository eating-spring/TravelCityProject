import pymysql

# 쿼리 파일 읽기
with open('query.sql', 'r', encoding='utf-8') as f:
    sql = f.read()

# DB 연결
conn = pymysql.connect(
    host= 'gosida.synology.me',
    port=48652,
    user='user',
    password='qwer1234',
    db='travelcity',
    charset='utf8mb4'
)

cursor = conn.cursor()

# 읽어온 쿼리 실행
cursor.execute(sql)

# 결과 처리
for row in cursor.fetchall():
    print(row)

conn.close()
