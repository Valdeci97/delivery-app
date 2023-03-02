import { toast } from 'react-toastify';

export function toastResponse(message, theme, option = 'warn') {
  const toastConfigOptions = {
    theme,
    position: 'top-center',
    style: { fontSize: '4rem' },
  };

  const toastOptions = {
    warn: () => toast.warn(message, { ...toastConfigOptions }),
    error: () => toast.error(message, { ...toastConfigOptions }),
    success: () => toast.success(message, { ...toastConfigOptions }),
  };

  const response = toastOptions[option];
  return { response };
}
