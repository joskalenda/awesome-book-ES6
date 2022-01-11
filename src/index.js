import './index.css';
import { DateTime } from 'luxon';
import ObjectBook from './script.js';
import { ListDisplay, NewBook, Getinfo } from './navbar.js';

const ShowList = document.querySelector('#list-link');
const AddNew = document.querySelector('#addlink');
const ContactInfo = document.querySelector('#contact-link');
const inputTitle = document.querySelector('#title-id');
const inputAuthor = document.querySelector('#author-id');

const Store = new ObjectBook(inputTitle, inputAuthor);
Store.booksList = JSON.parse(localStorage.getItem('storageFormData')) || [];
Store.createElement(Store.booksList);
Store.addBook();
window.addEventListener('load', () => {
  Store.onPageLoad();
});

AddNew.addEventListener('click', NewBook);
ShowList.addEventListener('click', ListDisplay);
ContactInfo.addEventListener('click', Getinfo);

const displayTime = () => {
  const Date  = DateTime.now();
  const date = Date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('#timer-p').innerHTML = date;
};
document.addEventListener('DOMContentLoaded', () => {
  displayTime();
  setInterval(() => {
    displayTime();
  }, 1000);
});