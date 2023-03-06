package com.spring.aop.common;

public class LogAdvice {
	public void printLogging() {
		//AOP포인트컷으로 검색된 기능에 추가되는 기능.
		System.out.println("printLogging()");
	}
}
