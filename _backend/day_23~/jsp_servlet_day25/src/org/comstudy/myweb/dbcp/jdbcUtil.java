package org.comstudy.myweb.dbcp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class jdbcUtil {
	// 클래스의 static멤버 -> 클래스 외부에서 객체생성 없이 사용가능.
	public static Connection getConnection() {
		// JDBC연동 - 커넥션 드라이버 찾기
		String url = "jdbc:h2:tcp://localhost/~/test";
		String user = "sa";
		String password = "";
		Connection conn = null;
		try {
			Class.forName("org.h2.Driver"); // 드라이버를 검색하고 인스턴스화
			conn = DriverManager.getConnection(url, user, password);
			System.out.println(conn);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	public static void close(Connection obj) {
		if (obj != null)
			try {
				obj.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
	}

	public static void close(ResultSet obj) {
		if (obj != null)
			try {
				obj.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
	}

	public static void close(Statement obj) {
		if (obj != null)
			try {
				obj.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
	}

	public static void close(Connection conn, Statement stmt, ResultSet rs) {
		close(rs);
		close(stmt);
		close(conn);
	}

}
