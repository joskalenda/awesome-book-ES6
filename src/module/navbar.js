const BookSection = document.querySelector('.container');
const MainTitle = document.querySelector('#list-title');
const AddSection = document.querySelector('.add-section');
const Contact = document.querySelector('#contacts');

export const ListDisplay = () => {
  BookSection.style.display = 'block';
  MainTitle.style.display = 'block';
  AddSection.style.display = 'none';
  Contact.style.display = 'none';
}

export const NewBook = () => {
  AddSection.style.display = 'block';
  Contact.style.display = 'none';
  BookSection.style.display = 'none';
  MainTitle.style.display = 'none';
}

export const Getinfo = () => {
  Contact.style.display = 'block';
  AddSection.style.display = 'none';
  BookSection.style.display = 'none';
  MainTitle.style.display = 'none';
}
