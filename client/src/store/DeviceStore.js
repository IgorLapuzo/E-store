import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._types = [
			{id: 1, name: 'Холодильники'},
			{id: 2, name: 'Смартфоны'},
			{id: 3, name: 'Ноутбуки'},
			{id: 4, name: 'Телевизоры'},
			
		]
		this._brands = [
			{id: 1, name: 'Samsung'},
			{id: 2, name: 'Apple'},
			
		]
		this._devices = [
			{id: 1, name: 'Iphone 12 pro', price: 1100, rating: 5, img: 'aaa'},
			{id: 2, name: 'Iphone 13 pro', price: 2100, rating: 0, img: 'bbb'},
			{id: 3, name: 'Iphone 13 pro', price: 2100, rating: 0, img: 'bbb'},
			{id: 4, name: 'Iphone 13 pro', price: 2100, rating: 0, img: 'bbb'},
			{id: 5, name: 'Iphone 13 pro', price: 2100, rating: 0, img: 'bbb'},
			{id: 6, name: 'Iphone 13 pro', price: 2100, rating: 0, img: 'bbb'},
			
		]
		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._brands = brands
	}
	setDevices(devices) {
		this._devices = devices
	}
	setSelectedType(type) {
		this._selectedType = type
	}
	setSelectedBrand(brand) {
		this._selectedBrand = brand
	}

	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}
}