import { atom, useRecoilState } from 'recoil'


export const statusState = atom({
    key: 'statusState',
    default: "Pending"
})