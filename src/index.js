import '../style/modal.css';

let ModalInstance = null

export default class GSMModal {
	constructor() {
		this.init()

		if (!ModalInstance) {
			ModalInstance = this
    }

		return ModalInstance
	}

	static getInstance() {
		if (!ModalInstance) {
			ModalInstance = new GSMModal()
		}
		return ModalInstance
  }

  init () {
    const triggers = document.querySelectorAll("[gsm-modal-trigger]")

    if (triggers) {
      this.addToDOM()
      triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
        })
      })
    } else {
			console.warn('Element [gsm-modal-trigger] was not found. Please, make sure the attribute has been set.')
    }
  }

  addToDOM () {
    const modalWrapperElement = document.createElement('div')

    const iconClose = '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14.1437801,12 L17.5784981,15.495589 C18.1690805,16.0966378 18.1348833,17.0386474 17.5021164,17.5996263 C16.8693496,18.1606052 15.8776291,18.1281221 15.2870467,17.5270733 L12,14.1817727 L8.71295325,17.5270733 C8.12237088,18.1281221 7.1306504,18.1606052 6.49788356,17.5996263 C5.86511673,17.0386474 5.83091947,16.0966378 6.42150185,15.495589 L9.85621991,12 L6.42150185,8.50441101 C5.83091947,7.90336219 5.86511673,6.96135259 6.49788356,6.40037369 C7.1306504,5.83939479 8.12237088,5.87187788 8.71295325,6.4729267 L12,9.81822731 L15.2870467,6.4729267 C15.8776291,5.87187788 16.8693496,5.83939479 17.5021164,6.40037369 C18.1348833,6.96135259 18.1690805,7.90336219 17.5784981,8.50441101 L14.1437801,12 L14.1437801,12 Z" id="Path" fill="#051017" fill-rule="nonzero"></path></svg>'
    const modal = '<div class="gsm-modal" gsm-modal><div class="gsm-modal__close">' + iconClose + '</div><div class="gsm-modal__content" id="modalContent"><div class="gsm-modal__content__img"><img id="modalImg"></div></div></div>'

    modalWrapperElement.innerHTML = modal

    document.body.appendChild(modalWrapperElement)
  }
}

window.onload = new GSMModal()