import useAsync from '../useAsync';
import * as newAudioRequestApi from '../../services/newAudioRequestApi';
import useToken from '../useToken';

export default function useSendAudioRequest() {
  const token = useToken();

  const {
    loading: newAudioRequestLoading,
    error: newAudioRequestError,
    act: newAudioRequest,
  } = useAsync((data) => newAudioRequestApi.postNewAudio(data, token), false);

  return {
    newAudioRequestLoading,
    newAudioRequestError,
    newAudioRequest,
  };
}