import useAsync from '../useAsync';
import * as newAudioRequestApi from '../../services/newAudioRequestApi';

export default function useSendAudioRequest() {
  const {
    loading: newAudioRequestLoading,
    error: newAudioRequestError,
    act: newAudioRequest,
  } = useAsync(newAudioRequestApi.postNewAudio, false);

  return {
    newAudioRequestLoading,
    newAudioRequestError,
    newAudioRequest,
  };
}