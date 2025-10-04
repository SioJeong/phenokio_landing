/**
 * Google Apps Script Web App URL
 * Step 3에서 받은 배포 URL을 아래에 붙여넣으세요
 */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_ReREtIOcc1iNZEPMRupHmzmYHIo2Aa_shtlpXQ116QzMWjIea9sywGxu9vCUi2Rhxg/exec"; // 여기에 배포 URL 붙여넣기!

export interface PreRegistrationData {
  name: string;
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

/**
 * 사전 등록 데이터를 Google Sheets에 저장
 */
export async function submitPreRegistration(
  data: PreRegistrationData
): Promise<ApiResponse> {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // CORS 우회
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // no-cors 모드에서는 응답을 읽을 수 없으므로
    // 요청이 성공했다고 가정
    return {
      success: true,
      message: "사전 등록이 완료되었습니다!",
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      success: false,
      message: "등록에 실패했습니다. 다시 시도해주세요.",
    };
  }
}
