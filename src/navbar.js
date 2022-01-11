const BookSection = document.querySelector('.container');
const MainTitle = document.querySelector('#list-title');
const AddSection = document.querySelector('.add-section');
const Contact = document.querySelector('#contacts');

export function ListDisplay() {
  BookSection.style.display = 'block';
  MainTitle.style.display = 'block';
  AddSection.style.display = 'none';
  Contact.style.display = 'none';
}

export function NewBook() {
  console.log('it has displayed');
  AddSection.style.display = 'block';
  Contact.style.display = 'none';
  BookSection.style.display = 'none';
  MainTitle.style.display = 'none';
}

export function Getinfo() {
  Contact.style.display = 'block';
  AddSection.style.display = 'none';
  BookSection.style.display = 'none';
  MainTitle.style.display = 'none';
}
