export type ModalType = "signIn" | "signUp" | null;

export type AuthModalContextType = {
    modal: ModalType;
    openModal: (type: ModalType) => void;
    closeModal: () => void;
}

