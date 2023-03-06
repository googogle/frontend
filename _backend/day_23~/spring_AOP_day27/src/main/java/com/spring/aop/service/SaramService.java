package com.spring.aop.service;

import java.util.List;

import com.spirng.aop.model.SaramDTO;

public interface SaramService {

	List<SaramDTO> selectAll();

	SaramDTO selectOne(SaramDTO dto);

	void insert(SaramDTO dto);

	void update(SaramDTO dto);

	void delete(SaramDTO dto);

}