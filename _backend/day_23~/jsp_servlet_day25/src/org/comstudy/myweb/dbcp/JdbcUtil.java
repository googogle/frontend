package org.comstudy.myweb.dbcp;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class JdbcUtil {
	// 클래스의 static멤버 -> 클래스 외부에서 객체생성 없이 사용가능.
	public static Connection getConnection() {
		Connection conn = null;
		Context initCtx;
		try {
			initCtx = new InitialContext();
			Context envCtx = (Context) initCtx.lookup("java:comp/env");
			DataSource ds = (DataSource) envCtx.lookup("jdbc/h2DB");
			conn = ds.getConnection();
		} catch (NamingException | SQLException e) {
			// TODO Auto-generated catch block
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
