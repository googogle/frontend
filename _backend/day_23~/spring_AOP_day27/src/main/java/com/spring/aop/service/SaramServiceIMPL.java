package com.spring.aop.service;

import java.util.List;

import com.spirng.aop.model.SaramDAO;
import com.spirng.aop.model.SaramDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaramServiceIMPL implements SaramService {
	@Autowired
	SaramDAO dao;

	@Override
	public List<SaramDTO> selectAll() {
		System.out.println(">>>>> selectAll():List<SaramDTO> - ServiceImpl 실행");
		dao.selectAll();
		return null;
	}

	@Override
	public SaramDTO selectOne(SaramDTO dto) {
		System.out.println(">>>>> selectOne():SaramDTO - ServiceImpl 실행");
		dao.selectOne(dto);
		return null;
	}

	@Override
	public void insert(SaramDTO dto) {
		System.out.println(">>>>> insert():void - ServiceImpl 실행");
		dao.insert(dto);
	}

	@Override
	public void update(SaramDTO dto) {
		System.out.println(">>>>> update():void - ServiceImpl 실행");
		dao.update(dto);
	}

	@Override
	public void delete(SaramDTO dto) {
		System.out.println(">>>>> delete():void - ServiceImpl 실행");
		dao.delete(dto);
	}
}
