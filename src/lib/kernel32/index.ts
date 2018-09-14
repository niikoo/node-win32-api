import { FModel } from 'win32-def';
import { load as hload } from '../helper';
import { DllNames } from '../model';
import { apiDef, Win32Fns } from './api';

export { apiDef }
export { Win32Fns }
export const dllName = DllNames.kernel32
export const load = (
  fns?: FModel.FnName[],
  settings?: FModel.LoadSettings) => hload<Win32Fns>(dllName, apiDef, fns, settings)
