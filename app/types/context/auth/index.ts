import { UserDataResponse } from "../../auth";

export type ModalType = "signIn" | "signUp" | "resetRequest" | "resetVerify" | null;
export type ModalType = "signIn" | "signUp" | null;

export type AuthModalContextType = {
    modal: ModalType;
    openModal: (type: ModalType) => void;
    closeModal: () => void;
}


export type AuthContextType = {
    user: UserDataResponse | null;
    setUser: (user: UserDataResponse | null) => void;
    loading: boolean;
};
