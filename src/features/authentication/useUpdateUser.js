import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const QueryClient = useQueryClient();

  const { isLoading: isupdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
        QueryClient.setQueryData(["user"],user)

    //   QueryClient.invalidateQueries({
    //     queryKey: ["user"],
    //   });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isupdating, updateUser };
}
