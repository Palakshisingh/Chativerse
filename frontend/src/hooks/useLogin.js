import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { login } from '../lib/api';

const useLogin = () => {
    const queryClient = useQueryClient();
  const {
    mutate: loginMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  return {error, isPending, loginMutation: mutate};

};

export default useLogin
